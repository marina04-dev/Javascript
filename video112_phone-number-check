// groups-example  
let text = "210-11-21-222, 210-12-34-222";
let regexp = /(...)-(..)-(..)-(...)/ig;

let matches = text.matchAll(regexp);

for (let match of matches) {
    console.log(match, match.index, match.length)
    for (let group of match) {
        console.log(group);
    }
}
