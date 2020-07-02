const readlineSync = require("readline-sync");

function factorial(a){
    return a > 1?a * factorial(a-1):1; // syntaxe pour return un nombre factoriel
}

a = Number(readlineSync.question("number :\n"));
console.log(factorial(a));

//essayer de faire cette ex sans la syntaxe factioriel
