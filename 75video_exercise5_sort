function Student(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.grade = undefined;
}

Student.prototype.toString = function() {
    return `${this.firstname} ${this.lastname} (grade: ${this.grade})`
}

let firstnames = ["Warren","Lonnie","Ferdie","Chance","Tom","Hector","Kayden","Tim","Kim","Sara"]

let lastnames = ["Warren","Lonnie","Ferdie","Chance","Tom","Hector","Kayden","Tim","Kim","Sara"]


function randomInt(min,max) {
    return Math.floor(Math.random() * (max-min) +min);
}

let fullnames = new Array(10);
for (let i=0; i<fullnames.length; i++) {
    fullnames[i] = new Student(firstnames[randomInt(0, firstnames.length)],lastnames[randomInt(0,lastnames.length)])
}

console.log(fullnames);

function gradeStudent(student) {
    student.grade = randomInt(0,11);
}

for (let student of fullnames) {
    gradeStudent(student);
    console.log("" + student);
}

function average(students) {
    let sum=0;
    for (let student of fullnames) {
        sum += student.grade;
    }
    return sum/fullnames.length;
}
console.log(`The average is ${average(fullnames)}`);


/*auxousa seira me sugkriti sort*/
let comparator = function(student1,student2) { 
    return student1.grade -student2.grade;
}

fullnames.sort(comparator);
console.log(fullnames);

/*fthinousa seira me sugkriti sort*/
let comparator1 = function(student1,student2) { 
    return student2.grade -student1.grade;
}

fullnames.sort(comparator1);
console.log(fullnames);
