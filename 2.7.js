const readlineSync = require("readline-sync");

let n =  Number(readlineSync.question("put the number n "));
let number;
let x = 0;

for(let i = 1; i <= n; i++){
   number = Number(readlineSync.question("put a number "));
   x += number;

}
console.log(x);
