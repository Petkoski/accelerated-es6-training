class Person {
    constructor(name) {
        this.name = name;
    };

    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
    };
}

class Jovan extends Person { //It will inherit everything Person has, but we can add more things or override existing here.
    constructor(name, age) {
        //Must call the construtor in the parent class (since we are adding a custom constructor in the derived class)
        super(name);
        this.age = age;
    }

    greet() { //Overriding the greet() method
        console.log("Hello!");
    }

    greetTwice() {
        this.greet(); //Points to 'Jovan' object (getting own method)
        super.greet(); //Points to 'Person' object (getting parent's method)
    }
}

let person = new Person('Petkoski');
console.log(person);
person.greet();

let person2 = new Jovan('Petkoski', 24);
console.log(person2);
person2.greetTwice();