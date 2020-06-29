const readlineSync = require("readline-sync");
let shoeSize =  readlineSync.question("What's your shoe size ? ");
let birthday = readlineSync.question("what the year of your birthday ? ");

calcul = ((((shoeSize *2) +5) * 50) - birthday) + 1766;
console.log(calcul);