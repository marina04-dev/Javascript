// Bind Method - Prototype Function Methods
function greet(greeting, question) {
    console.log(`${greeting}, my name is ${this.name}. ${question}`);
}

const person1 = {name:"Bob"};
const person2 = {name:"Tom"};

let greetTom = greet.bind(person2, "Hello", "How is it going?");
let greetBob = greet.bind(person1, "Hi", "Are you ok?");

greetTom();
greetTom();
greetBob();
greetBob();

// Apply Examples
let object = {
    x:1,
    getX: function() {
        return this.x;
    }
}

// wrong
let extracted = object.getX;
//console.log(extracted()); // error

// correct 
let extracted2 = object.getX.bind(object);
console.log(extracted2());

// correct
console.log(extracted.bind(object));
