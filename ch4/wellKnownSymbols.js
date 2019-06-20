//So called well-known symbols already implemented in JS (ES6).
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols

class Person {
    
}

//Acessing the toStringTag symbol
//of the prototype of the Person class
//So we are able to change the behavior 
Person.prototype[Symbol.toStringTag] = 'Personn';

/**
 * Symbol.toStringTag
 * A string value used for the default description of an object.
 * Used by Object.prototype.toString()
 */

let pers = new Person();
console.log(pers); //Person [Personn] {}