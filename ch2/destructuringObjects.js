//Destructuring objects
//Important notes:
//a) Not changing the original object
//b) Object destructuring - you pull out elements by their property name

let obj = {
    name: "Jovan",
    age: 24
};
let {name, age} = obj;
console.log(name); //Jovan
console.log(age); //24

let obj2 = {
    name2: "Jovan",
    age: 24,
    greet: function() {
        console.log('Hello there!');
    }
};
//let {name, , greet} = obj2; //Don't work!
let {name2, greet} = obj2; //When referencing by name - it works!
console.log(name2); //Jovan
greet(); //Hello there!
//Names must match! (in the base object and newly declared value)

//Using aliases:
let {greet: hello} = obj2;
//greet(); //Won't work anymore
hello(); //Hello there!