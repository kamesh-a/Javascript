### Synchronous Vs Asynchronous
- Blocking vs non-blocking
- Event Loop
- Web Apis
- concurrent operations

> Event-driven interaction model `vs` request-response model

![Events](http://www.webstepbook.com/supplements-2ed/slides/images/figure_3_event.png)


```

Ex-1:
function one() {
    two();
}

function two() {
    three();
}

function three() {
   	 console.log('end');
}

one();

```

Classic example of async with `setTimeout`

```javascript

ex-2 : 

console.log('So her we are to sync vs async ');
setTimeout(function async(){
    console.log('Hello folks !!!');
},0);
console.log('Wait i forgot something to say !!!');

ex-3 :
function f() {
  console.log("1");
  setTimeout(g, 0);
  console.log("3");
  h();
}

function g() {
  console.log("2");
}

function h() {
  console.log("4");
}

f();


```

Event Handlers  : 

```javascript
ex-4 : 
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

```

Blocking `vs` non-blocking

```node
ex-4 : 
var fs = require('fs');
 
var contents = fs.readFileSync('/Volumes/HD_II/Personal/Learning/nodejs/Docpad/my-new-website/src/node/content.txt','utf8');
console.log('File content Sync: '+contents);
console.log('Blocking\n');
 
 
var contents = fs.readFile('/Volumes/HD_II/Personal/Learning/nodejs/Docpad/my-new-website/src/node/content.txt','utf8', function(err,contents){
   console.log('File content Async: '+contents);
});
console.log('Non-Blocking\n');

```