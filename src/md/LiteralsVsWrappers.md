### Literals vs Wrapper functions.

- Primitives are immutable, compared by value ( undefined, null, boolean, string and number )
- non-primitives are mutable ( properties can be added or deleted ), compared by identity rather than value.

In JavaScript there are 5 primitive types: `undefined, null, boolean, string` and `number`. Everything else is an object. 

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