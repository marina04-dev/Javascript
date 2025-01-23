/* exercise_5  */
let billingDetails = {
    fullname: "Bob Dole",
    addressLine1: "Line 1",
    addressLine2: "Line 2",
    addressLine3: "Line 3",
    print() {
        console.log(this.fullname + "\n");
        for (let i=1; i<=3; i++) {
            console.log(this.["addressLine" + i] + "\n");
        }
    }
}

/* exercise_6  */
let array = {};
array[1]=11;
array[2]=12;
array.length = 3;
for (let value of Object.values(array)) {
    console.log(value);
}

array["1"]=4;
