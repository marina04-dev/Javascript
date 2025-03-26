// 2D Array :Each Row,Column Summary
// Lesson 6: Exercise 2
let array = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
];

let rows = array.length;
let columns = array[0].length;

// sum of each row
for (let i=0; i<rows; i++) {
  let sum = 0;
  for (let j=0; j<columns; j++) {
    sum+=array[i][j];
  }
  console.log(`Row ${i}: sum=${sum}`);
}

// sum of each column 
for (let j=0; j<columns; j++) {
  let sum = 0;
  for (let i=0; i<rows; i++) {
    sum += array[i][j];
  }
  console.log(`Column ${j}: sum=${sum}`);
}
