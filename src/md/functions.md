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
