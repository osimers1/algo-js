const readlineSync = require("readline-sync");

function calcDistance(Xa, Ya, Xb, Yb){
    let n =  Math.pow(Xb - Xa,2) + Math.pow(Yb - Ya,2);
    return  Math.sqrt(n);
}


Xa = Number(readlineSync.question("Xa :\n"));
Ya = Number(readlineSync.question("Ya :\n"));
Xb = Number(readlineSync.question("Xb :\n"));
Yb = Number(readlineSync.question("Yb :\n"));

console.log(calcDistance(Xa, Ya, Xb, Yb));