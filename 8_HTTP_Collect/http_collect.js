/*
 *** Christian Walker
 *** 12/24/2017
 *** Collect all data from the server and write number of characters and
 *** the string of characters sent by the server.
*/

var http = require('http');
/* bl: a storage object for collections of Node Buffers */
var bl = require('bl');
var url = process.argv[2];

http.get(url, function (response){
    response.pipe(bl(function(err, data){
        if(err) return console.log(err);
        console.log(data.length);
        console.log(data.toString());
    }));
});
