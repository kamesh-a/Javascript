### Functions

Function declaration:

```javascript
function id(x) {
    return x;
}

```
Invocation or calling a function : 

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
- normal function
- constructor
- method

Normal function :

```javascript
id('hello')
```

Constructor : 

You can invoke a function via the `new` operator. Then it becomes a constructor.

```javascript
new Date() // returns an object.

function Person(name){
    this.name = name;
}

var user = new Person('kamesh');
console.log(user);
```

Method
You can store a `function` in a `property` of an `object`, which turns it into a `method` that you can invoke via that `object`. Here’s an example invocation:

```javascript

<obj>.<method>()

var user = {
    name : 'Jane',
    describe : function(){
        return "Hey it's "+this.name+", How May I help You";
    }
}

user == <obj>
describe == <method>

user.describe();

```

“Parameter” `Versus` “Argument” : 
The terms `parameter` and `argument` are often used interchangeably, Parameters are used to define a function. In the following example, `param1` and `param2` are `parameters`:
```javascript
function foo(param1, param2) {
    ...
}
```
`Arguments` are used to `invoke` a function. In the following example, 3 and 7 are arguments:
```javascript
foo(3, 7);
```

Defining Functions :

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

Function Expressions : 

```javascript
var add = function (x, y) { return x + y };
console.log(add(2, 3)); // 5
```

Named function expressions:

It allows a function expression to refer to itself, which is useful for self-recursion:

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
NOTE : 

> The `name` of a `named function expression` is only accessible inside the function expression:

```javascript
var repeat = function me(n, str) {
    return n > 0 ? str + me(n-1, str) : '';
};
console.log(repeat(3, 'Yeah')); // YeahYeahYeah
console.log(me); // ReferenceError: me is not defined
```

Function Declarations :

> A function declaration declares a new variable, creates a function object, and assigns it to the variable.

```javascript
function add(x, y) {
    return x + y;
}

```


The Function Constructor : 

```
var add = new Function('x', 'y', 'return x + y');
add(2,3)

```
> Using Function constructor is slower than creating functions directly.

### Hoisting : 
Hoisting means “moving to the beginning of a scope.” 
- Function declarations are hoisted completely
- variable declarations only partially.

```javascript
foo();
function foo() {  // this function is hoisted
    console.log('foo function got invoked.');
}
```

> AWW!!! How is this possible? 

The reason the preceding code works is that JavaScript engines move the declaration of foo to the beginning of the scope.

```javascript
function foo() {
    console.log('foo function got invoked.');
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

Function expressions are not hoisted : 

```javascript
foo();  // TypeError: undefined is not a function
var foo = function () {
    ...
};
```

Engine Executes expression like the following.

```javascript
var foo;
foo();  // TypeError: undefined is not a function
foo = function () {
    ...
};
```

Getting a `name` of function : 

```javascript
> function f1() {}
> f1.name
'f1'
```

The name of anonymous function expressions is the `empty` string:

```javascript
> var f2 = function () {};
> console.log( 'name of function : '+f2.name ) ;

```

Named function expressions, however, do have a name:
```javascript
> var f3 = function myName() {};
> f3.name
'myName'
```

Which Is Better: A Function Declaration or a Function Expression?

> Should you prefer a function declaration like the following?
```javascript
function id(x) {
    return x;
}
```
> Or the equivalent combination of a var declaration plus a function expression?
```javascript
var id = function (x) {
    return x;
};
```

They are basically the same, but function declarations have two advantages over function expressions:
 - hoisting
 - name 


More Control over Function Calls: `call(), apply(), and bind()`


call `func.call(thisValue, argArray)` :
```javascript
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King
```

Apply : `func.apply(thisValue, argArray)` : 

```javascript
Example 1 : 
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 
say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

Example 2 : 

> Math.max(17, 33, 2)
33
> Math.max.apply(null, [17, 33, 2])
33
````

Bind : 

Creates a partial function or returns a new functions.

> func.bind(thisValue, arg1, ..., argN)

```javascript
ex 1: 
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

ex 2: 
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}
 
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);
 
sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King


```


