var fs = require('fs');
 
var contents = fs.readFileSync('/Volumes/HD_II/Personal/Learning/nodejs/Docpad/my-new-website/src/node/content.txt','utf8');
console.log('File content Sync: '+contents);
console.log("Hello Node\n");
 
 
var contents = fs.readFile('/Volumes/HD_II/Personal/Learning/nodejs/Docpad/my-new-website/src/node/content.txt','utf8', function(err,contents){
   console.log('File content Async: '+contents);
});
console.log("Hello again!");