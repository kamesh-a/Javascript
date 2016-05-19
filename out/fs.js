var fs = require('fs');
 
var contents = fs.readFile('./content.txt','utf8', function(err,contents){
   console.log(contents);
});
console.log("Hello Node\n");
 
 
var contents = fs.readFile('./content.txt','utf8', function(err,contents){
   console.log(contents);
});
console.log("Hello again!");