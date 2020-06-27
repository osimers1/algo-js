const readlineSync = require("readline-sync");
console.log("salut");
let name = readlineSync.question("What's your name ? ");
let firstName = readlineSync.question("What's your first name ? ");
let city = readlineSync.question("Where do you live ? ");
console.log("your name is " + name +" " + firstName + " and you live in " + city);