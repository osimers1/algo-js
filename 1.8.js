const readlineSync = require("readline-sync");
let question = 0;
let name = readlineSync.question("what's your name ? \n");
question = question + 1;
let age = readlineSync.question("owh old are you ? \n");
question = question + 1;
let animal = readlineSync.question("What's you favorite animal ? \n ");
question = question + 1;
let place = readlineSync.question("where do you want to go ? \n");
question += 1;

console.log("one day, whent " + name + " was at " + place + " he saw his or her animal prefer, the " + animal + ". whent it was happened, she/he have " + age + " years old \n" );
let choice = readlineSync.question("do you whant to know how question as ask ? if you whant to number of question see press y \n");
if(choice == "y" ){
    console.log("I ask you "+ question + "time");    
}


