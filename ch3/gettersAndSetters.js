class Person {
    constructor(name) {
        this._name = name;
    }

    //Getters and setters for properties:
    get name() {
        //return this._name; //Prefixed with underscore because it's private property (not accessible from outside) 
        //The only way to get it is to call this name() method which returns it (concept called encapsulation that allows controlling the access)
    
        return this._name.toUpperCase(); //Controlling the data actually returned (only uppercase in this example)
    }

    set name(value) {
        if (value.length > 2) //Business rules
            this._name = value;
        else
            console.log("Rejected");
    }
}

let person = new Person('Jo'); //Works because we are calling the constructor (no length rules there)
console.log(person);

//Using the set method:
person.name = 'va'; //Doesn't work, because now we are calling the set method.
console.log(person);

person.name = 'van'; //Now works

//Using the get method:
console.log(person.name); //Output: VAN

//No true protection, _name is still accessible (not really private). Output: van
console.log(person._name);