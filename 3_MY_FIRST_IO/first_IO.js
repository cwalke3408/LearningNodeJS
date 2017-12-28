/*
 *** Christian Walker
 *** A program that reads a file and print the number newlines
 *** by using asynchronous filesystem operation.
 *** 1st: name of the file
 *** Result: number of newlines is printed on the console.
*/

// Load filesystem module from Node core library
var fs = require('fs');
var filename = process.argv[2];
// Return a Buffer object containing the complete contents of the file
var readFile = fs.readFileSync(filename);
var str = readFile.toString();
var splitted = str.split('');
var count = 0;
for(var i = 0; i < splitted.length; i++){
    if(splitted[i] == '\n') count++;
}
console.log(count);
