const readlineSync = require("readline-sync");
let number = 0;
let pair = 0;
let impair = 0;

while(number < 100){
    number +=1;
    if  ((number % 2) == 0){
        pair = number/2;
        console.log(pair);
    }
    else{
        impair = number * 3;
        console.log(impair);
    }
    
}