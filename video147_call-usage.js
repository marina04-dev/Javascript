// Call Usage - Object Function Methods
let array = [1,2,3,4,5];

function max() {
    let v = arguments[0];
    for (let item of arguments) {
        if (item>v) {
            v=item;
        }
    }
    return v;
}

// ES6 +
console.log(max(...array));

// pre-ES6
console.log(max.apply(null,array));
