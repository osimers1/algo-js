const readlineSync = require("readline-sync");

function askTvSerie(){
    serie = {
        titlte : "",
        year   : "",
        actor  : ""       
    }
}

askTvSerie.titlte = readlineSync.question("Title of film :\n");
askTvSerie.year = readlineSync.question("Year :\n");
askTvSerie.actor = readlineSync.question("actor :\n");

console.log(askTvSerie);