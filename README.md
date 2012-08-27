# templatizer.js

Simple solution for compiling jade templates into vanilla JS functions for blazin' fast client-side use.

## What is this?

Client-side templating is overly complicated, ultimately what you *actually* want is a function you can call from your JS that puts your data in a template. Why should I have to send a bunch of strings with Mustaches `{{}}` or other silly stuff for the client to parse? Ultimately, all I want is a function that I can call with some variable to render the string I want.

So, the question is, what's a sane way to get to that point? Enter [jade](http://jade-lang.com). Simple, intuitive templating, and happens to be what I use on the server anyway. So... Jade has some awesome stuff for compiling templates into functions. I just built templatizer to make it easy to turn a folder full of jade templates into a CommonJS module that exports all the template functions by whatever their file name.

## How do I use it?

1. Write all your templates as individual jade files in a folder in your project.
2. Run IDo


So a folder like this

```
/clienttemplates
   user.jade
   app.jade
   otherTemplate.jade
```

Complies down to a JS file that looks something like this:

```js
// here's about 2k worth of utils that jade uses to DRY up the template code a bit. 
// Includes some basic shims for Object.keys, etc.
var jade=function(exports){ ... }

// a function built from the `user.jade` file
// that takes your data and returns a string.
exports.user = function () {} 

// built from the `app.jade` file
exports.app = function () {} // the function 

// etc. etc
```

The awesome thing is... there are no external dependencies because they're just functions at this point. Crazy fast, SO MUCH WIN!!!!