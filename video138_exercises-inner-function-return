// exercise 4: inner functions
function countVowels(str) {
    function isVowel(ch) {
        return "aeuioAEUIO".includes(ch);
    }
    let cnt = 0;
    for (let i = 0; i< str.length; i++) {
        if (isVowel(str[i])) {
            cnt++;
        }
    }
    return cnt;
}

console.log(countVowels('hello'));
console.log(countVowels('HELLO'));
console.log(countVowels('Hello'));


// exercise 3: function return
function adder(num) {
    return function(x) {
        return num + x;
    };    
}

let add5 = adder(5);
console.log(add5(2)); // 7
console.log(add5(10)); // 15

let add10 = adder(10);
console.log(add10(2)); // 12
console.log(add10(10)); // 20
