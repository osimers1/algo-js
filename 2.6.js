const readlineSync = require("readline-sync");
let numberDay = readlineSync.question("choose an number between 1 et 7\n");

switch(numberDay){

    case '1' : 
        console.log("lundi");
        break;
    case '2' :
        console.log("mardi");
        break;
    case '3' :
        console.log("mercredi");
        break;
    case '4' :
        console.log("jeudi");
        break;
    case '5' :
        console.log("vendredi");
        break;
    case '6' :
        console.log("samedi");
        break;
    case '7' :
        console.log("dimanche");
        break;
}