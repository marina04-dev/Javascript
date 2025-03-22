function Person(name, age) {
    return {
        getName: function() {
            return name;
        },
        setAge: function(newAge) {
            age = newAge;
        },
        getAge: function() {
            return age;
        },
        birthday: function() {
            age = age + 1;
        },
        toString() {
            return `${name}(${age})`;
        }
    }
}

let person = Person('John', 22);
console.log("" + person);
person.birthday();
person.birthday();
console.log("" + person);
