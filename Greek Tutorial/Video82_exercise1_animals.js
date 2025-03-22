
    "use strict"

    class Dog {
        constructor(name, breed, weight=10, mood=5){
            this.name = name;
            this.breed = breed;
            this.weight = weight;
            this.mood = mood;
        }
        eat() {
            console.log(this.name + " eating..");
            this.mood++;
        }
        bark() {
            if (this.mood>5)
                console.log("Woof Woof");
            else
                console.log("Woof");
        }
        walk() {
            console.log(this.name + " walking..");
            this.mood++;
        }
    }

    let lassie = new Dog("Lassie", "Colley");
    let piko = new Dog("Piko", "Terrier", 30, 4);

    piko.bark();
    piko.eat();
    piko.bark();
    piko.walk();
    piko.bark();

    console.log(piko, lassie);
