function fun(initial,...rest) {
    let result=initial;
    for (let item of rest) {
        result *= item;
    }
    return result;
}
console.log(fun(1,2,3,4,5))


/* default */
function myf(a,b="default",c) {
    console.log(a,b,c);
}
myf(1,2,3)

/* parameters_arguments(emmesi_parametros_pinakas_peripou)
function myFunc() {
    for (let item of arguments) {
        console.log(item);
    }
}
myFunc(1,2,3)
