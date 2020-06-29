const readlineSync = require("readline-sync");

let arr = [];

//console.log(Math.floor(Math.random() * 11));  math.floor arrondi les chiffre 

function multiRand () {
    return Math.floor(Math.random() * 11);
}

n = readlineSync.question("taille du tableaux ?\n");

for(let i =0; i < n; i++ ){
    arr.push(multiRand());
}

console.log(arr);