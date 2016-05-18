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