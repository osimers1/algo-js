const readlineSync = require("readline-sync");

let arr = [1, 2, 3, 4, 5];
n = 0;
x = 0;

for(let i = 0; i< arr.length; i++){
    x += arr[n];
    n++;
}
console.log(x/arr.length);