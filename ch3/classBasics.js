//Constructor syntax (old):
function Person() { //Person constructor:
    
}
var pers = new Person();

//Class keyword works kind of similar, but it has different features.
class PersonCl {
    constructor() {
        this.name = 'Jovan'; //Assigning properties
    };

    // constructor(name) { //Parameterized constructor
    //     this.name = name;
    // };

    greet() {
        console.log('Hello, my name is ' + this.name);
    };
}

let per = new PersonCl(); //Creating a new object based on the blueprint defined in class PersonCl { }
console.log(per);
per.greet();

//let per = new PersonCl('Petkoski');