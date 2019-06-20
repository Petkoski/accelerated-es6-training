let obj = { //Object literal
    name: 'Max',
    age: 27
};

let name = 'Anna';
let age = 25;
let obj2 = {
    name,
    age
};
/**
 * New feature: obj2 will take the values from surrounding values
 * (since we are not initializing explicit values inside obj2). It
 * will automatically look if there are variables declared before
 * the object declaration (that match the property name).
 */

let obj3 = {
    name: "Jovan", //Overriding just the name
    age
};

let obj4 = {
    name: "Jovan",
    age,
    greeting() { //Defining methods shorthand
        console.log(this.name + ', ' + this.age);
    }
};

//Defining property names as strings:
let obj5 = {
    "name": "Jovan",
    age,
    "greet me"() { //You can also do this for methods [parentheses () remain outside]
        console.log(this.name + ', ' + this.age);
    }
}; 

//Dynamic fields (creating properties dynamically):
let ageField = "age";
let obj6 = {
    "name": "Jovan",
    [ageField]: 28, //Referring to ageField. It will look for this ageField variable and use its value ("age") to CREATE a property (key) name.
    "greet me"() {
        console.log(this.name + ', ' + this.age);
    }
};

console.log(obj);
console.log(obj2);
console.log(obj3);
obj4.greeting();
console.log(obj5["name"]);
obj5["greet me"](); //Accessing greet me() method of obj5

console.log(obj6);
console.log(obj6["age"]); //Output: 28
console.log(obj6.age); //Dot notation possible too. Output: 28
console.log(obj6[ageField]); //Accessing it through the field. Output: 28