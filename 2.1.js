const readlineSync = require("readline-sync");
let age = readlineSync.question("how old are you ?\n");
if(age>18){
    console.log("you're an adult");
}
else{
    console.log("you're not yet an adult");
} 