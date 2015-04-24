(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([{{amdModuleDependencies}}], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var cur_path = root ;
        var parts = "{{originalNamespace}}".split('.');
        for(var i = 0, j = parts.length; i < j ; i++) {
         cur_path[parts[i]] = cur_path[parts[i]] || {};
         cur_path =  cur_path[parts[i]];
        }
        root{{namespace}}.{{internalNamespace}} = factory();
        // throw new Error('{{internalNamespace}}: window{{namespace}} does not exist or is not an object');
    }
}(this, function ({{amdDependencies}}) {
    {{jade}}

    var {{internalNamespace}} = {};
{{code}}
    return {{internalNamespace}};
}));
