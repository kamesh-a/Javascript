---
title: "Javascript!"
layout: "default"
isPage: true
---

What is Javascript ?

client side scripting : 
> wiki : An object-oriented computer programming language commonly used to create interactive effects within web browsers

![Influences](http://speakingjs.com/es5/images/spjs_0701.png)

- Event-driven interaction model `vs` request-response model
- Concurrent operations
- Client-side JavaScript extends the core language by supplying objects to control a `Browser` and its `Document Object Model (DOM`).
- Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a `server`. 
  1. Communicate with a `database`
  2. Provide continuity of information from one invocation to another of the application 
  3. Perform `file` manipulations on a server

Everything in javascript is an object. Aww!!!
> Act like objects. ( Explained in Literals section )

`Arrays, functions`, even `numbers`! Because of this, you can do some really interesting things, such as modifying the prototypes of Objects, Arrays, etc.

- Written in `c++` ( v8 chrome `c++`, Spidermonkey firefox `c++` and Rhino `java` )
- primitive type ( `Boolean , Number , null , undefined and String` ( ex : `var letter = 'abc';` ) )


- non-primitive ( Object, Regex and Array )
>Compared by unique identity.

### Topics which are covered
- Primitive `vs` non-primitive
- Falsy `vs` Truthy
- Function and Hoisting
- Scope
- IIFE
- Objects
- Literals `vs` Wrappers and Immutable `vs` non-Immutable ( primitives section, find in primitives chapter in ebook )
- Inheritance
- this
- Closure
- Synchronous `vs` Asynchronous
- Event Loop


### Topics which are not covered
- Object.defineProperties or propertyDescriptor and accessors.
- unicode
- Date
- Math
- Regular expressions
- module loaders

