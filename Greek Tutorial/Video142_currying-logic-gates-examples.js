/* Currying: Breaking a function that takes many arguments into individual functions that take one argument */
function multiply(a) {
    return function(b) {
        return function(c) {
            return a*b*c
        }
    }
}

let multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)(4));

let multiplyBySix = multiplyByTwo(3);
console.log(multiplyBySix(4));


/* Logic Gates */
function not(a) {
    return !a;
}

function and(a) {
    return function(b) {
        return a && b;
    }
}

function or(a) {
    return function(b) {
        return a || b;
    }
}

console.log(not(true));
console.log(and(true)(false));
console.log(or(true)(not(false)));
