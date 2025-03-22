function randomInt(min,max) {
  return Math.floor(Math.random() * (max-min) + min);
}

let N=10;
let M=40;
let K=9;
let array = new Array(N);

for (let i=0; i<array.length; i++){
  array[i]= new Array(M);
  for (let j=0; j<array[i].length; j++){
    array[i][j]= new Array(K); 
    for (let k=0; k<array[i][j].length; k++){
        array[i][j][k]=randomInt(0,5001);}  }
}
console.log(array);

let element = 1123;
let found = false;
outer: for (let twoD of array) {
    for (let oneD of twoD) {
        if (oneD.indexOf(element)!==-1) {
            console.log(`${element} found!`);
            found=true;
            break outer;
        }
    }
}
