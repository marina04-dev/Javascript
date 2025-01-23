// this : examples
// Object
let ob = {
    x:1,
    f: function() {
        return this;
    }
};
console.log(ob.f());

// A constructor function
function Constructor() {
    this.x = 1;
}

Constructor.prototype.f = function() { return this; }
let ob2 = new Constructor();
console.log(ob2.f());

// A class
class Class {
    constructor() {
        this.x = 1;
    }
    method() { return this; }
}

let ob3 = new Class();
console.log(ob3);
