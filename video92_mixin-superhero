class Superhero {
    constructor(name,strength,stamina) {
        this.name = name;
        this.strength = strength;
        this.stamina = stamina;
    }
}

function mixinFlying(superhero) {
    Object.assign(superhero,{fly() {console.log("I am flying");}, airAttack() {console.log("I am attacking");}});
}

let ironMan = new Superhero("Iron Man",50,1000);
let batman = new Superhero("Batman",150,1200);
mixinFlying(ironMan);
console.log(ironMan);
