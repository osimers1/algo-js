const readlineSync = require("readline-sync");
let firstName = readlineSync.question("what's your first name ? ");
console.log("hello " +  firstName);