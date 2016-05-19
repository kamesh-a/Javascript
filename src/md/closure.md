### Closure

> The functions defined in the closure 'remember' the environment in which they were created

> Each function stays connected to the variables of the functions that surround it.

Normal : 
```javascript
function createIncrementor(start) {
	start++
    return start;
}

createIncrementor(5) 
```

Closure : 

```javascript

Ex-1 : 
function createIncrementor(start) {
    return function () {  // (1)
        return start++;
    }
}

var inc = createIncrementor(5);
> inc() // 6
> inc() // 7
> inc() // 8


var obj =  {
	incrementor :  function(start){
		return function () {  // (1)
        	return start++;
    	}
	}
}

var inc = obj.incrementor(5);
 > inc()
 > inc()
 > inc()

Ex-2 : 

function init() {
    var name = "Javascript"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // use variable declared in the parent function    
    }
    displayName();
}
init();

function makeFunc() {
    var name = "Javascript";

    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
```

> We can private variables, simulating `private members` as in other programming languages 

```javascript
Ex-3 :
var counter = (function() {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

```

Creating closures in loops: A common mistake


```javascript
Ex-4 : 
var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    fnArr.push(function() {
        return arr[i]
    });
};

??? Undefined 

var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    fnArr.push(function() {
        console.log('Index : '+i);
        return arr[i]
    });
};


function printAll(){
	fnArr.forEach( function(fn, index) {
		console.log('['+index+'] : '+fn())
	});
}

printAll();

```

> Real-World Scenario while adding event handlers to DOM in for loop

> Using closure , yaayy !!!

```javascript

var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    var data = arr[i];
    fnArr.push(function() {
        return data
    });
};

printAll();

```

> but, wait !!! why it's printing just 5

```javascript
var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    (function() {
        var data = arr[i];
        fnArr.push(function() {
            return data
        });
    })();
};

var arr = [1, 2, 3, 4, 5];
var fnArr = []
for (var i = 0; i < arr.length; i++) {
    fnArr.push(function(index) {
        return arr[index]
    }.bind(null,i));
};

```





