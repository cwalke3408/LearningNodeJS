/*
 *** Christian Walker
 *** A modular takes the given directory and filtered by the given
 *** extension.
*/

// require fs to be used to read the dir
var fs = require('fs');
var path = require('path');

// module created to filter files in a given directory by the ext given
module.exports = function (dir, ext, callback){
    fs.readdir(dir, function(error, list){
        if(error);
        else {
            var extList = list.filter(function filter_list(files){
                //return files.toString().includes('.'+ext);
                return path.extname(files) === '.' + ext;
            });
        }

        // Callback function that uses a function from the file using this first_modular
        // THis callback prints the list of files matched by ext
        callback(error, extList);
    });
}
