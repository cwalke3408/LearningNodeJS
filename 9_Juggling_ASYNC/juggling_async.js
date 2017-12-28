/*
 *** Christian Walker
 *** 12/27/2017
 *** Giving 3 URLs from the command line, collect the complete content provided
 *** by each of the URLs and print to console.
*/

var http = require('http');
var bl = require('bl');
var arr = [];
var count = 0;

/*  http.get for each of the URLs and collect data using bl.
    Store completed data into an array and 
    use count to determine if all of the URLs are finish
    and then print the contents in order.
 */
http.get(process.argv[2], function(response1){
    response1.pipe(bl(function (err, data){
        if(err) return console.log(err);
        arr[0] = data.toString();
        count++;
        if(count === 3) console.log(arr[0] +'\n'+ arr[1] +'\n'+ arr[2]);
    }));
});
http.get(process.argv[3], function(response2){
    response2.pipe(bl(function(err, data){
        if(err) return console.log(err);
        arr[1] = data.toString();
        count++;
        if(count === 3) console.log(arr[0] +'\n'+ arr[1] +'\n'+ arr[2]);
    }));
});
http.get(process.argv[4], function(response3){
    response3.pipe(bl(function(err, data){
        if(err) return console.log(err);
        arr[2] = data.toString();
        count++;
        if(count === 3) console.log(arr[0] +'\n'+ arr[1] +'\n'+ arr[2]);
    }));
});
