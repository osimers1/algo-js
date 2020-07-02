const readlineSync = require("readline-sync");


// askTvSerie.actor = readlineSync.question("actor :\n");


function askTvSerie(){
    let serie = {
        title : "",
        year   : "",
        actor  : []       
    }
    serie.title = readlineSync.question("Title of film :\n");
    serie.year = readlineSync.question("Year :\n");
    let n = readlineSync.question("nombre d'acteur");
    for(let i = 1; i <= n; i++){
        serie.actor.push(readlineSync.question("actor "));
    }
    return serie;
}

function randomize(a) {
    let i, j, tmp;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i));
        tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a;
}

let serie = askTvSerie();
console.log(serie);
console.log(randomize(serie.actor));