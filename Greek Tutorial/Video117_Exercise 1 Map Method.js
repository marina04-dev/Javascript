// map method: exercise 1
let persons = [
    {name:"John Snow",occupation:"King in the North",house:"Stark"},
    {name:"Daenerys Targaryen",occupation:"Queen of the Seven Kingdoms",house:"Targaryen"},
    {name:"Brandon Stark",occupation:"Three-eyed Raven",house:"Stark"}]
    
let names = persons.map(person=>person.name);
console.log(names);

let nameHouse = persons.map(person=>({"name":person.name,"house":person.house}));
console.log(nameHouse);
