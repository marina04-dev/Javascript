// functional programming example 
function incrementArrayNonFactional(array,value) {
    for (let i=0; i<array.length; i++) {
        array[i]+=value;
    }
}

function incrementArrayFactional(array,value) {
    let newArray=[...array];
    for (let i=0; i<array.length; i++) {
        newArray[i]+=value;
    }
    return newArray;
}
