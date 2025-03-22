// Exercise 3: toString Method
let piko = {
    name: "piko",
    type: "dog",
    toString() {
        return `${this.name} (${this.type})`;
    }
}

let miou = {
    name: "miou",
    type: "cat",
}

console.log(`${piko}, ${piko.toString.apply(miou)}`);
