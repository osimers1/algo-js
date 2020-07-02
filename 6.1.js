const readlineSync = require("readline-sync");

class circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    
        get surface(){
            return Math.PI * Math.pow(this.radius, 2);
        }
}

let circle1 = new circle(10, 10, 2);
let surface1 = circle1.surface;
console.log(surface1);