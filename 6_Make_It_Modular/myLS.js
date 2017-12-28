/*
 *** Christian Walker
 *** A program that use first_modular that filter the directory by
 *** the extension and print the files to the console.
*/

// require to use my first modular
var myMod = require('./first_modular.js');

// inputs dir to filter and extention to filter with
var dir = process.argv[2];
var ext = process.argv[3];

// call modular to filter the dir passed in
// callback function passed in as parameter to print the files that extention
myMod(dir, ext, function callMod(error, list){
    if(error) return console.log(error);
    list.forEach(function(file){
        console.log(file);
    });
});
