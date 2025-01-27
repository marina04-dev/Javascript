// Call method - Methods of Object Function
function greet(greeting, question) {
    console.log(`${greeting}, my name is ${this.name}.${question}`);
}

const person1 = {name:"Tom"};
const person2 = {name:"Bob"};

greet.call(person1, "Hello","How is it going?");
greet.call(person2, "Hi","Are you ok?");

// Apply method - Methods of Object Function
function greet1(greeting, question) {
    console.log(`${greeting}, my name is ${this.name}.${question}`);
}

const person3 = {name:"Tom"};
const person4 = {name:"Bob"};

greet1.apply(person3, ["Hello","How is it going?"]);
greet1.apply(person4, ["Hi","Are you ok?"]);
