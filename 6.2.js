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

let rectangle1 = new rectangle(10, 10, 10, 10);
let rectangle2 = new rectangle(40, 10, 10, 10);
let colision = rectangle1.colide(rectangle2);
console.log(colision);