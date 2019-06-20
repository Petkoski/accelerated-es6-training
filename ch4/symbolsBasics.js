/**
 * Symbols are a new primitive type (like
 * numbers, strings, bools).
 * Main thing - they provide a unique identifier
 * (you don't see the identifier itself, only
 * have the symbol and you know that it will
 * represent a unique identifier).
 * 
 * Use cases: add properties to objects (the symbol
 * would be the key of which you know it is definitely
 * unique).
 * Also symbols are not iterable (if you loop over an
 * object with a for..in loop, you won't see symbols as
 * keys).
 */

let sym = Symbol('debug'); //without new keyword, argument 'debug' is for debugging reason only
console.log(sym); //Output: Symbol(debug)
console.log(sym.toString()); //Allows us to check which symbol it is
console.log(typeof sym); //Output: symbol (not an object, a new primitive)

let anotherSym = Symbol('debug');
console.log(sym == anotherSym); //false, both are unique (even same arg. was provided when creating)
//Behind the scenes they stand for UNIQUE IDs

//Symbols are great in conjunction with objects:
let obj = {
    name: 'Jovan',
    [sym]: 22
};
console.log(obj); //{ name: 'Jovan', [Symbol(debug)]: 22 }

for (let key in obj) {
    console.log(key);
}
//Output: name
//OR:
console.log(Object.keys(obj)); //Output: [ 'name' ]
//The [sym] is actually NOT printed out, but it is still there.

//Proof:
console.log(obj[sym]); //22

/**
 * Meta programming concept (power):
 * Store some meta info about this object (like createdAt timestamps, etc.)
 * and you could access it if you need it (explicitely). But in another place
 * in the code, if you loop through all the keys, those data won't be shown.
 */