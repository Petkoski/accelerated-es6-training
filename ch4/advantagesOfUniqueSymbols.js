let sym = Symbol.for('age');

let person = {
    name: 'Jovan',
    age: 30
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 24;
}

makeAge(person);

//Still have access to both properties:
console.log(person[sym]); //24
console.log(person["age"]); //30

/**
 * Another reason symbols are great:
 * In lines 9-10, age is NOT overridden (even though 'age' key is provided when creating the symbol).
 * This ageSymbol (line 10) has nothing to do with the age property (line 5).
 */