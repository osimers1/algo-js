const readlineSync = require("readline-sync");
let number = 0;
while(number < 100){
    number += 1;
    console.log(number);
}

for(number = 1; number <= 100; number++){
    console.log(number);
    number += 1;
    console.log(number);
}