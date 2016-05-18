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
