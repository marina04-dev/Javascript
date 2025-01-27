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

