const readlineSync = require("readline-sync");
let min = readlineSync.question("min ?\n");
let max = readlineSync.question("max ?\n");
let current = readlineSync.question("current ?\n");

if(min > max){
    console.log("ERROR the min is better than the max")
    return false;
}

if(min < current && max > current){
    console.log("the current number is between min and max");
}
else{
    console.log("the current number is not between min and max");
}