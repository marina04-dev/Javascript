/* Closure : Exercise 2 */
function makeFunctions() {
    let funcs = [];
    
    for (let i=0; i<10; i++) {
        function func() {
            return i;
        }
        funcs.push(func);
    }
    return funcs;
}

let functions = makeFunctions();
console.log(functions[3]());


/* Closure : Exercise 3 */
function makeFunctions() {
    let funcs = [];
    let i;
    
    for (i=0; i<10; i++) {
        function func() {
            return i;
        }
        funcs.push(func);
    }
    return funcs;
}

let functions = makeFunctions();
console.log(functions[3]());
