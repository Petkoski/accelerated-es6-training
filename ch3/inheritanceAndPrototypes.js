class Person {
    constructor(name) {
        this.name = name;
    };

    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
    };
}

class Jovan extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    greet() { //Overriding the greet() method
        console.log("Hello!");
    }

    greetTwice() {
        this.greet();
        super.greet();
    }
}

let person = new Jovan('Petkoski', 24);
console.log(person);
person.greetTwice();

/**
 * What's the prototype of 'Jovan'?
 * Checking it with:
 */
console.log(person.__proto__); //Output: Jovan {}
console.log(person.__proto__ == Person); //false
console.log(person.__proto__ == Person.prototype); //false
console.log(person.__proto__ === Jovan.prototype); //true
//Prototype of our 'person' is Jovan.prototype

/**
 * 'Extends' gives us a new class and allows to use all
 * features (properties & methods) the parent class created.
 */