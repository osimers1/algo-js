const readlineSync = require("readline-sync");
let theNumber = 42;
let number = readlineSync.question("insert a number");

while(number != theNumber){
    number = readlineSync.question("are you sure ?")
}