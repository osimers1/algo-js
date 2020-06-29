const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question("Number 1 ");
let secondNumber  = readlineSync.question("number 2 ");
number3 = Math.trunc(firstNumber);
console.log(number3 * secondNumber);