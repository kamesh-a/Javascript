---
title: "Javascript!"
layout: "default"
isPage: true
---

What is Javascript ? 
> client side scripting
> wiki : An object-oriented computer programming language commonly used to create interactive effects within web browsers


- Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM).
- Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. 
  1. Communicate with a database
  2. Provide continuity of information from one invocation to another of the application
  3. Perform file manipulations on a server

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


### 1. Primitive `vs` non-primitive
Primitive : Compared by value.
- Booleans: true, false
- Numbers: 1736, 1.351
- Strings: 'abc', "abc"
- Two “nonvalues”: undefined, null

```javascript
> 3 === 3
true
> 'abc' === 'abc'
true
```

non-primitive :
All nonprimitive values are objects. The most common kinds of objects are:
- Objects (Literals)

```javascript

{
    firstName: 'Jane',
    lastName: 'Doe'
}
```

- Arrays (Literals): 

```javascript
['item1','item2'];

```

compared by reference.
Identities are compared; every value has its own identity:
```javascript
> ({} === {})  // two different empty objects
false

> var obj1 = {};
> var obj2 = obj1;
> obj1 === obj2
true
```

### non-values
To represent missing information in language.
```javascript
undefined
```
> no value, non existence or Uninitialized or missing values are reprsented as undefined

```javascript
null
```

> null means “no object.” It is used as a nonvalue whenever an object is expected (parameters, last in a chain of objects, etc.).( no properties for both not event toString())


#### 2. Falsy `vs` Truthy :
Whenever JavaScript expects a boolean value (e.g., for the condition of an if statement)
Falsy values in language, equality or comparision check not needed

- undefined, null
- Boolean: false
- Number: 0, NaN
- String: ''

```javascript
var falsyArr = [0, undefined, null, '', NaN];

falsyArr.forEach(function(element, index) {
    if (element)
        console.log('Truthy value : ', element);
    else
        console.log('Falsy value : ', element);
});
```

- Truthy values ( Note : Object and empty array are considered to be true )

```
var truthyArr = [1, -1, true, 'string', [],{},function(){},RegExp];

truthyArr.forEach(function(element, index) {
    if (element)
        console.log('Truthy value : ', element);
    else
        console.log('Falsy value : ', element);
});
```
### Functions

Functions are values that can be called. One way of defining a function is called a function declaration. For example, the following code defines the function id that has a single parameter, x:

```javascript
function id(x) {
    return x;
}

```
The return statement returns a value from id. You can call a function by mentioning its name, followed by arguments in parentheses

```javascript
> id('hello')
'hello'
```
If you don’t return anything from a function, undefined is returned (implicitly):
```javascript
> function f() { }
> f()
undefined

```

The Three Roles of Functions in JavaScript
Once you have defined a function as just shown, it can play several roles:
Nonmethod function (“normal function”)
You can call a function directly. Then it works as a normal function. Here’s an example invocation:
```javascript
id('hello')
```

Constructor
You can invoke a function via the new operator. Then it becomes a constructor, a factory for objects. Here’s an example invocation:
```javascript
new Date() // returns an object.
```

Method
You can store a function in a property of an object, which turns it into a method that you can invoke via that object. Here’s an example invocation:
```javascript
obj.method()
```

“Parameter” `Versus` “Argument”
The terms parameter and argument are often used interchangeably, Parameters are used to define a function. They are also called formal parameters and formal arguments. In the following example, param1 and param2 are parameters:
```javascript
function foo(param1, param2) {
    ...
}
```
Arguments are used to invoke a function. They are also called actual parameters and actual arguments. In the following example, 3 and 7 are arguments:
```javascript
foo(3, 7);
```

Defining Functions
This section describes three ways to create a function:
```javascript
Via a function expression
Via a function declaration
Via the constructor Function()
```

All functions are objects, instances of `Function`:
```javascript
function id(x) {
    return x;
}
console.log(id instanceof Function); // true
```
Therefore, functions get their methods from Function.prototype.

Function Expressions
A function expression produces a `value—a` function object. For example:
```javascript
var add = function (x, y) { return x + y };
console.log(add(2, 3)); // 5
```

The preceding code assigned the result of a function expression to the variable add and called it via that variable. The value produced by a function expression can be assigned to a variable (as shown in the last example), passed as an argument to another function, and more. Because normal function expressions don’t have a name, they are also called `anonymous function expressions`.

Named function expressions

You can give a function expression a name. Named function expressions allow a function expression to refer to itself, which is useful for self-recursion:
```javascript
var fac = function me(n) {
    if (n > 0) {
        return n * me(n-1);
    } else {
        return 1;
    }
};
console.log(fac(3)); // 6

var fac = function(n) {
    if (n > 0) {
        return n * fac(n-1);
    } else {
        return 1;
    }
};
console.log(fac(3)); // 6

```
NOTE
The name of a named function expression is only accessible inside the function expression:
```javascript
var repeat = function me(n, str) {
    return n > 0 ? str + me(n-1, str) : '';
};
console.log(repeat(3, 'Yeah')); // YeahYeahYeah
console.log(me); // ReferenceError: me is not defined
```
Function Declarations
The following is a function declaration:
```javascript
function add(x, y) {
    return x + y;
}

```
A function declaration declares a new variable, creates a function object, and assigns it to the variable.

The Function Constructor
The constructor Function() evaluates JavaScript code stored in strings. For example, the following code is equivalent to the previous example:
```
var add = new Function('x', 'y', 'return x + y');
```
####Hoisting
Hoisting means “moving to the beginning of a scope.” Function declarations are hoisted completely, variable declarations only partially.
Function declarations are completely hoisted. That allows you to call a function before it has been declared:
```javascript
foo();
function foo() {  // this function is hoisted
    ...
}
```
The reason the preceding code works is that JavaScript engines move the declaration of foo to the beginning of the scope. They execute the code as if it looked like this:
```javascript
function foo() {
    ...
}
foo();

function foo() {
    bar();  // OK, bar is hoisted
    function bar() {
        ...
    }
}

function foo() {
    bar();  // Not OK, bar is still undefined
    var bar = function () {
        // ...
    };
}

```
var declarations are hoisted, too, but only the declarations, not assignments made with them. Therefore, using a var declaration and a function expression similarly to the previous example results in an error:
```javascript
foo();  // TypeError: undefined is not a function
var foo = function () {
    ...
};
```
Only the variable declaration is hoisted. The engine executes the preceding code as:
```javascript
var foo;
foo();  // TypeError: undefined is not a function
foo = function () {
    ...
};
```

The Name of a Function
Most JavaScript engines support the nonstandard property name for function objects. Function declarations have it:
```javascript
> function f1() {}
> f1.name
'f1'
```
The name of anonymous function expressions is the empty string:
```javascript
> var f2 = function () {};
> f2.name
''
```
Named function expressions, however, do have a name:
```javascript
> var f3 = function myName() {};
> f3.name
'myName'
```
The name of a function is useful for debugging. Some people always give their function expressions names for that reason.
Which Is Better: A Function Declaration or a Function Expression?
Should you prefer a function declaration like the following?
```javascript
function id(x) {
    return x;
}
```
Or the equivalent combination of a var declaration plus a function expression?
```javascript
var id = function (x) {
    return x;
};
```
They are basically the same, but function declarations have two advantages over function expressions:
They are hoisted (see Hoisting), so you can call them before they appear in the source code.
They have a name (see The Name of a Function). However, JavaScript engines are getting better at inferring the names of anonymous function expressions.


More Control over Function Calls: call(), apply(), and bind()
call(), apply(), and bind() are methods that all functions have (remember that functions are objects and therefore have methods). They can supply a value for `this` when invoking a method and thus are mainly interesting in an object-oriented context (see Calling Functions While Setting this: call(), apply(), and bind()). `This` section explains two use cases for nonmethods.
`func.apply(thisValue, argArray)`
This method uses the elements of argArray as arguments while calling the function func; that is, the following two expressions are equivalent:
```javascript
func(arg1, arg2, arg3)
func.apply(null, [arg1, arg2, arg3])
```
thisValue is the value that this has while executing func. It is not needed in a non-object-oriented setting and is thus null here.
apply() is useful whenever a function accepts multiple arguments in an array-like manner, but not an array.
Thanks to apply(), we can use Math.max() (see Other Functions) to determine the maximum element of an array:
```javascript
> Math.max(17, 33, 2)
33
> Math.max.apply(null, [17, 33, 2])
33
````
func.bind(thisValue, arg1, ..., argN)
This performs partial function application—a new function is created that calls func with this set to thisValue and the following arguments: first arg1 until argN, and then the actual arguments of the new function. thisValue is not needed in the following non-object-oriented setting, which is why it is null.
Here, we use bind() to create a new function plus1() that is like add(), but only requires the parameter y, because x is always 1:
```javascript
function add(x, y) {
    return x + y;
}
var plus1 = add.bind(null, 1);
console.log(plus1(5));  // 6
```
In other words, we have created a new function that is equivalent to the following code:
```javascript
function plus1(y) {
    return add(1, y);
}
```

### Scope
Declaring a Variable
In JavaScript, you declare a variable via a var statement before you use it:
```javascript
var foo;
foo = 3; // OK, has been declared
bar = 5; // not OK, an undeclared variable
```
You can also combine a declaration with an assignment, to immediately initialize a variable:
```javascript
var foo = 3;
```
The value of an uninitialized variable is undefined:
```javascript
> var x;
> x

undefined
```

The scope of a variable
The scope of a variable are the locations where it is `accessible`. For example:
```javascript
function foo() {
    var x;
}
```javascript
Here, the direct scope of x is the function foo().

Nested :

```javascript
function foo(arg) {
    function bar() {
        console.log('arg: '+arg);
    }
    bar();
}
console.log(foo('hello')); // arg: hello

```
Shadowing :
```javascript
var x = "global";
function f() {
    var x = "local";
    console.log(x); // local
}
f();
console.log(x); // global
```

Variables Are Function-Scoped
Most mainstream languages are `block-scoped`: variables “live inside” the innermost surrounding code block. Here is an example from Java:
```java
public static void main(String[] args) {
    { // block starts
        int foo = 4;
    } // block ends
    System.out.println(foo); // Error: cannot find symbol
}
```

In contrast, JavaScript’s variables are `function-scoped`: only functions introduce new scopes; blocks are ignored when it comes to scoping. For example:
```javascript
function main() {
    { // block starts
        var foo = 4;
    } // block ends
    console.log(foo); // 4
}
( Note : ES6 changed them `let` & 'const')
```

Variable Hoisting:
```javascript

function f() {
    console.log(bar);  // undefined
    var bar = 'abc';
    console.log(bar);  // abc
}

function f() {
    var bar;
    console.log(bar);  // undefined
    bar = 'abc';
    console.log(bar);  // abc
}


> var x = 123;
> var x;
> x
123

```

###IIFE Immediately invoked function expression (IIFE, pronounced “iffy”)
- It is immediately invoked
- It must be an expression
- The trailing semicolon is required
```javascript
function f() {
    if (condition) {
        var tmp = ...;
        ...
    }
    // tmp still exists here
    // => not what we want
}

function f() {
    if (condition) {
        (function () {  // open block
            var tmp = ...;
            ...
        }());  // close block
    }
}

(function () { // open IIFE
    // inside IIFE
}()); // close IIFE

```

IIFE with params : 
```javascript
var x = 23;
(function (twice) {
    console.log(twice);
}(x * 2));
```
Best Practice: Avoid Creating Global Variables
Global variables have two disadvantages. First, pieces of software that rely on global variables are subject to side effects; they are less robust, behave less predictably, and are less reusable.
Second, all of the JavaScript on a web page shares the same global variables: 

> your code, built-ins, analytics code, social media buttons, and so on.

That means that name clashes can become a problem. That is why it is best to hide as many variables from the global scope as possible. For example, don’t do this:
```javascript
<!-- Don’t do this -->
<script>
    // Global scope
    var tmp = generateData();
    processData(tmp);
    persistData(tmp);
</script>
```
The variable tmp becomes global, because its declaration is executed in global scope. But it is only used locally. Hence, we can use an IIFE (see Introducing a New Scope via an IIFE) to hide it inside a nested scope:
```javascript
<script>
    (function () {  // open IIFE
        // Local scope
        var tmp = generateData();
        processData(tmp);
        persistData(tmp);
    }());  // close IIFE
</script>
```
### Objects
All nonprimitive values are objects. The most common kinds of objects are:
Plain objects, which can be created by object literals (see Single Objects):
```javascript
{
    firstName: 'Jane',
    lastName: 'Doe'
}
```
The preceding object has two properties: the value of property firstName is 'Jane' and the value of property lastName is 'Doe'.

Arrays, which can be created by array literals (see Arrays):
```javascript
[ 'apple', 'banana', 'cherry' ]
```
The preceding array has three elements that can be accessed via numeric indices. For example, the index of 'apple' is 0.
Regular expressions, which can be created by regular expression literals (see Regular Expressions):
```javascript
/^a+b+$/
```

Single Object , each property is a (key, value) pair
```javascript
var jane = {
    name: 'Jane',

    describe: function () {
        return 'Person named '+this.name;
    }
};

Dot Operator (.): Accessing Properties via Fixed Keys

```javascript
	jane.name // 'Jane'
	jane.describe(); // 'Person named Jane';

```

Arbitrary Property Keys : 

```javascript
> var obj = { 'not an identifier': 123 };
> obj['not an identifier']
123
> obj['not an identifier'] = 456;
```

Extracting Methods : 
If you extract a method, it loses its connection with the object.
```javascript

var jane = {
    name: 'Jane',

    describe: function () {
        return 'Person named '+this.name;
    }
};

var func = jane.describe;
func()
TypeError: Cannot read property 'name' of undefined

sol :

var func2 = jane.describe.bind(jane);
func2()
'Person named Jane'

```

Getting properties

The dot operator lets you “get” a property (read its value). Here are some examples:
```javascript
> jane.name  // get property `name`
'Jane'
> jane.describe  // get property `describe`
[Function]
```
Getting a property that doesn’t exist returns undefined:
```javascript
> jane.unknownProperty
undefined

```

Calling methods

The dot operator is also used to call methods:
```javascript
> jane.describe()  // call method `describe`
'Person named Jane'
```

Setting properties

You can use the assignment operator (=) to set the value of a property referred to via the dot notation. For example:
```javascript
> jane.name = 'John';  // set property `name`
> jane.describe()
'Person named John'
```
If a property doesn’t exist yet, setting it automatically creates it. If a property already exists, setting it changes its value.

Deleting properties

The delete operator lets you completely remove a property (the whole key-value pair) from an object. For example:
```javascript
> var obj = { hello: 'world' };
> delete obj.hello
true
> obj.hello
undefined

```

Bracket Operator ([]): Accessing Properties via Computed Keys :
```javascript

> var obj = { someProperty: 'abc' };

> obj['some' + 'Property']
'abc'

> var propKey = 'someProperty';
> obj[propKey]
'abc'

Getting props:
> var obj = { 'not an identifier': 123 };
> obj['not an identifier']
123

calling methods :
> var obj = { myMethod: function () { return true } };
> obj['myMethod']()
true

setting props :
> var obj = {};
> obj['anotherProperty'] = 'def';
> obj.anotherProperty
'def'

deleting props:
> var obj = { 'not an identifier': 1, prop: 2 };
> Object.keys(obj)
[ 'not an identifier', 'prop' ]
> delete obj['not an identifier']
true
> Object.keys(obj)
[ 'prop' ]


```


Objects via Constructor 

```javascript
function Person(name){
	this.name = name;
}

Person.prototype.describe = function(){
	return 'Person named '+this.name;
}

var jane = new Person('Jane');
```
### Literals vs Wrapper functions.

- Primitives are immutable, compared by value ( undefined, null, boolean, string and number )
- non-primitives are mutable ( properties can be added or deleted ), compared by identity rather than value.

In JavaScript there are 5 primitive types: undefined, null, boolean, string and number. Everything else is an object. The primitive types boolean, string and number can be wrapped by their object counterparts. These objects are instances of the Boolean, String and Number constructors respectively.
```javascript
typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"
 
typeof "abc"; //"string"
typeof String("abc"); //"string"
typeof new String("abc"); //"object"
typeof (new String("abc")).valueOf(); //"string"
 
typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"

```
If primitives have no properties, why does "abc".length return a value?

```javascript
var a = "abc";
a.length
// actual happening
(new String('abc')).length
// intermediate object gets destructed


var primitive = "september";
primitive.vowels = 3;
//new object created to set property 
(new String("september")).vowels = 3;
 
primitive.vowels;
//another new object created to retrieve property 
(new String("september")).vowels; //undefined


Really object is created, is there way to verify in a scientific investigation,
> Yes there is, !!!!!!!!!

String.prototype.returnMe= function() {
    return this;
}
 
var a = "abc";
var b = a.returnMe();  
 
a; //"abc" 
typeof a; //"string" (still a primitive)
b; //"abc"
typeof b; //"object"



a; //"abc" 
typeof a; //"string" (still a primitive)
b; //"abc"
typeof b; //"object"

```
### Inheritance

The Prototype Relationship Between Objects

The prototype relationship between two objects is about inheritance: every object can have another object as its prototype
```javascript
> __proto__ == [[Prototype]] some javscript engines support __proto__ special key for getting and setting prototype.
```
![prototype chain](http://speakingjs.com/es5/images/spjs_2101.png)

ex :
```javascript
var proto = {
    describe: function () {
        return 'name: '+this.name;
    }
};
var obj = {
    __proto__: proto,
    name: 'obj'
};

var obj2 = {
    name: 'obj2'
};

obj.__proto__ === proto 
obj2.__proto__ // root Object
proto.__proto__ // root Object

```
Overriding
```javascript
obj.describe = function () { return 'overridden' };
obj.describe()

```
Prototypes are great for sharing data between objects: several objects get the same prototype, which holds all shared properties.
```javascript
var jane = {
    name: 'Jane',
    describe: function () {
        return 'Person named '+this.name;
    }
};
var tarzan = {
    name: 'Tarzan',
    describe: function () {
        return 'Person named '+this.name;
    }
};
```
![prototype chain](http://speakingjs.com/es5/images/spjs_2102.png)
```javascript

var PersonProto = {
    describe: function () {
        return 'Person named '+this.name;
    }
};
var jane = {
    __proto__: PersonProto,
    name: 'Jane'
};
var tarzan = {
    __proto__: PersonProto,
    name: 'Tarzan'
};


jane.describe()
tarzan.describe()
```

Object.create 
```javascript
>syntax
Object.create(proto, propDescObj?)

var PersonProto = {
    describe: function () {
        return 'Person named '+this.name;
    }
};
var jane = Object.create(PersonProto, {
    name: { value: 'Jane', writable: true }
});

or manually you can create them.

var jane = Object.create(PersonProto);
jane.name = 'Jane';
```
Checking Whether a Property Exists

`in` operator

`propKey in obj`

or 

`<target-Object>.hasOwnProperty(propKey)`

or 

`Object.hasOwnProperty(propKey)`


Function prototyping.
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function() {
    return "Person " + this.name;
};

function Worker(name, title) {
    Person.call(this, name);
    this.title = title;
}

Worker.prototype.__proto__ = Person.prototype;
Worker.prototype.describe = function() {
    return this.title + " " + this.name;
};

var user = new Worker('Kamesh','Devloper')
user instanceof Worker
user instanceof Person
```

ES5 to help. ( Object.create setting proper prototype internal without manually
altering the prototype chain )

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function() {
    return "Person " + this.name;
};

function Worker(name, title) {
    Person.call(this, name);
    this.title = title;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.describe = function() {
    return this.title + " " + this.name;
};

var user = new Worker('Kamesh','Devloper')
user instanceof Worker
user instanceof Person
```
How to call super function ? is there super available in javascript
No but we can mimic it.
```javascript
user.describe(); // Developer Kamesh.

Worker.prototype.describe = function() {
    return this.__proto__ // worker prototype
    			.__proto__ // person prototype
    			.describe.apply(this,arguments); // person describe fn.
};

or 

Worker.prototype.describe = function() {
    return Person.describe.apply(this,arguments); // person describe fn.
};

```

What does “this” actually mean and how is it decided?

 For example, if I have a class Boat(), which has a method moveBoat(), when refering to “this” inside of the moveBoat() method, we are actually accessing the newly created object of Boat().
```java
class Boat{
	boolean isReady(){
		return true;
	}
	public boolean moveBoat(){
		return this.isReady(); // this refers to newly created object.
	}
	
	public static void main(String[] args) {
		Boat miniTitanic = new Boat();
		System.out.println(miniTitanic.moveBoat());
	}
}
```
however it is not the only rule and “this” can often refer to a different `object` from a different `execution context`

> function caller determines `this` context.

```javascript
function describe(){
	console.log('context ',this);
	console.log('User was identified as '+this.name);
}

var jane = {
    'name': 'Jane',
    'describe': describe // method
};
var tarzan = {
    name: 'Tarzan',
    describe: describe // method;
};

jane.describe();
tarzan.describe();
```
or 

> Remember call,apply and bind. which can invoke the function
with provided context `this` and arguments.

```javascript
function describe(){
	console.log('context ',this);
	console.log('User was identified as '+this.name);
}

var smith = {
	name : 'smith'
}

var jane = {
	name : 'jane'
}

describe.call(smith)
describe.apply(jane)

```
### Synchronous Vs Asynchronous
- Blocking vs non-blocking


### Further Reading :

[Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

[valueOf & toString](https://javascriptweblog.wordpress.com/2010/05/03/the-value-of-valueof/)

[Context](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/)

[closures](http://davidshariff.com/blog/javascript-scope-chain-and-closures/)

[This](http://davidshariff.com/blog/javascript-this-keyword/)

[Array Like Objects](http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/)

[GitHub](http://www.2ality.com/2010/12/javascripts-prototypal-inheritance.html)

[Inheritance](http://www.2ality.com/2011/03/lightweight-javascript-inheritance-apis.html)

### Video 

[EventLoop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### Books :
[Javascript Englightment](http://www.javascriptenlightenment.com/JavaScript_Enlightenment.pdf)

[ES5](http://speakingjs.com/es5/index.html)

