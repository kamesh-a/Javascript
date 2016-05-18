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