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

