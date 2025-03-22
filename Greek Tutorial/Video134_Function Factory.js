// function factory
function factoryPower(base) {
    function toPower(n) {
        return base**n;
    }
    return toPower;
}

let powerOfTwo = factoryPower(2);
console.log(powerOfTwo(10));


// exercise 1: Polynomial function
function factory(a,b,c) {
    function polynomial(x) {
        return a*x**2 + b*x + c;
    }
    return polynomial;
}

let myPolynomial = factory(1,1,1);
console.log(myPolynomial(2));


// exercise 2
function counter() {
    let cnt=0;
    return function() {
        cnt++;
        return cnt;
    }
}

let cnt1=counter();
let cnt2=counter();
console.log(cnt1());
console.log(cnt1());
console.log(cnt2());
console.log(cnt2());
