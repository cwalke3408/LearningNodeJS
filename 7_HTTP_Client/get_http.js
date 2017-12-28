/*
 *** Christian Walker
 *** 12/24/2017
 *** A program that performs an HTTP GET request to a URL provided as the first
 *** argument.  Prints each data event on a new line on the console
*/

var http = require("http");

// url is passed in as the first argument
var url = process.argv[2];

// http GET request to the URL
http.get(url, function callback(response){
    // convert setEncoding to emit events as Strings rather than
    // node Buffer objects
    response.setEncoding('utf8');
    var body = "";

    // Listen for events
    response.on("error", console.log('error'));
    response.on("data", function(data){
        body += data + '\n';
    });
    response.on("end", console.log(body));
});
