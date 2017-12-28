/*
 *** Christian Walker
 *** A program that prints a list of files in a given directory.
 *** First Argument: name of directory
 *** Second Argument: file extension e.g. 'txt'
 *** Result: List of files are printed to the console.
*/

var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var fileExt = '.' + process.argv[3];

fs.readdir(dirName, function finishedReading(error, list){
    if(error) return console.log(error);
    var extList = list.filter(function ext(file){
        if(file.includes(fileExt)) console.log(file);
        return file.includes(fileExt);
    });
});
