/*
 *** Christian Walker
 *** A program uses asynchronous filesystem operation to read a file
 *** print the number newlines it contains
 *** 1st Argument: name of the fileExt
 *** Result: the number of newlines is printed to the console.
*/

var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, function finishedReading(error, fileContents){
    if(error) return console.error(error);
    console.log(fileContents.toString().split('\n').length - 1);
});
