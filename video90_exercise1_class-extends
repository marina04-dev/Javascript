class Cow {
    constructor(weight,hunger) {
        this.hunger = hunger;
        this.weight = weight;
    }
    express() {
        if (this.hunger > 5) {
            console.log("Moooowww");
        }
        else {
            console.log("Mowww");
        }
    }
}

class TexasLongHorn extends Cow {
    constructor(weight,hunger,hornLength) {
        super(weight,hunger);
        this.hornLength = hornLength;
    }
}

let molly = new TexasLongHorn(1,1,1);
let bob = new TexasLongHorn(2,2,2);
console.log(molly,bob);

Object.getPrototypeOf(molly).mollyAttr = 2;
Object.getPrototypeOf(bob).bobAttr = 3;
console.log(molly,bob);
