const readlineSync = require("readline-sync");
let firstNumber = Number (readlineSync.question("enter your fist integer number "));
let secondeNumber = Number  (readlineSync.question("enter your second integer number "));
console.log(firstNumber % secondeNumber);
