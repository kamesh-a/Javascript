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