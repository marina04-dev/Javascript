let john = {
    firstname: "John",
    lastname: "Dutton",
    fullname: function() {
        return `${this.firstname} ${this.lastname}`;
    },
};
let beth = {
    firstname: "Beth",
    lastname: "Dutton",
    spouce: undefined,
    children: [],
    mood: null,
    fullname: function() {
        return `${this.firstname} ${this.lastname}`;
    },
    father: john
};

function deepCopy(object) {
    return JSON.parse(JSON.stringify(object));
}

let jamie = deepCopy(beth);
jamie.firstname = "Jamie";
jamie.father.firstname = "Garrett";

console.log(jamie);
console.log(beth);
