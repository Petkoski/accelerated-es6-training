class Person {
    constructor(name) { //Parameterized constructor
        this.name = name;
    };

    greet() {
        console.log('Hello, my name is ' + this.name);
    };
}

let person = new Person('Petkoski');
console.log(person);
person.greet();

/**
 * What's the prototype of this 'person'?
 * Checking it with:
 */
console.log(person.__proto__); //Output: Person {}
console.log(person.__proto__ == Object.prototype); //false
console.log(person.__proto__ == Object); //false
console.log(person.__proto__ === Person.prototype); //true
//Prototype of our 'person' is Person.prototype