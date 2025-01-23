// this - functions
console.log(this);

// A function
function myfunc1() {
    return this;
}
console.log(myfunc1());

// On inner functions
function outer() {
    function inner() {
        return this;
    }
    return inner();
}
console.log(outer());
