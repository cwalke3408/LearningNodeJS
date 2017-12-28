/*
 *** Christian Walker
 *** A program that accepts multiple command-line arguements
 *** and prints that sum to the console.
 *** e.g. $node program.js 1 2 3
 *** console -> 6
*/
var sum = 0;
for(var i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
}
console.log(sum);
