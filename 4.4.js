const readlineSync = require("readline-sync");

let arr = [];
let n = 0;
let x = 0;
let t = 0;
function averrage(arr){
    for(let i = 0; i< arr.length; i++){
        x += arr[n];
        n++;
    }
    return(x/arr.length);
}

function min(arr){
    return Math.min(...arr);
}

function max(arr){
    return Math.max(...arr);
}

function multiRand () {
    return Math.floor(Math.random() * 11);
}

t = readlineSync.question("taille du tableaux ?\n");

for(let i =0; i < t; i++ ){
    arr.push(multiRand());
}
console.log(arr)
console.log(averrage(arr));
console.log(min(arr));
console.log(max(arr));