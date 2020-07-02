const readlineSync = require("readline-sync");

class rectangle {
    constructor(topLeftXPosk, topLeftYPos, width, length){
        this.topLeftXPosk = topLeftXPosk;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    colide(otherRectangle){
        if (this.topLeftXPosk >= otherRectangle.topLeftXPosk || this.topLeftYPos >= otherRectangle.topLeftYPos)
            return true;
        else if (this.topLeftXPosk <= otherRectangle.topLeftYPos || this.topLeftYPos <= otherRectangle.topLeftYPos)
            return true;
        else
            return false;
    }
}

function randomXPos(){  
    return Math.floor(Math.random() * 1000);
}
function randomYPos(){ 
    return Math.floor(Math.random() * 1000);
}
function randomWidth(){ 
    return Math.floor(Math.random() * 300);
}
function randomLength(){ 
   return Math.floor(Math.random() * 500);
}

let tabRectangle = [];
for (let i = 0; i<=1000; i++){
    tabRectangle.push(new rectangle(randomXPos(), randomYPos(), randomWidth(), randomLength()));
}

for(let i = 1; i<=1000; i++){
    let tabcolide = [];
    for(let j; j <= 1000; j++){
        if(i != j && tabRectangle[i].colide(tabRectangle[j])){
            tabcolide.push(j);
        }
    }
    console.log(i  + "-" + tabRectangle[i].topLeftXPosk + "-" + tabRectangle[i].topLeftYPos + "-" + tabRectangle[i].width + "-" + tabRectangle[i].length);
}