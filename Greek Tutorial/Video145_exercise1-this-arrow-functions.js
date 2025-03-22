// this - arrow functions
// An arrow function enclosed in global execution contact
console.log((()=>this)());

// An arrow function enclosed in function execution contact
function f() {
    console.log((()=>this)());
}
f();

// An arrow function enclosed in a method
let ob = {
    x:1,
    f:function() {
        return (()=>this)();
    }
}
console.log(ob.f());

// An arrow function as a method - exercise 1
let ob1 = {
    x:1,
    f: ()=>this
}
console.log(ob1.f());
