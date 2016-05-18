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