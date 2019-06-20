//Sometimes you want to have a unique id, but want to use
//the same id multiple times: two symbols that share the id.

let sym1 = Symbol.for('age'); //'age' is not just a debugging string, it's a key.
let sym2 = Symbol.for('age');
let sym3 = Symbol('gender'); //Ordinary symbol, not a shared one ['gender' is just a debugging string here].

console.log(sym1 == sym2); //true
console.log(sym1 === sym2); //true

let person = {
    name: 'Jovan'
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    let genderSymbol = Symbol('gender');
    person[ageSymbol] = 24;
    person[genderSymbol] = 'male';
}

makeAge(person);

//console.log(person[ageSymbol]); //Error: ageSymbol is not defined
console.log(person[sym1]); //24
console.log(person[sym2]); //24
/**
 * Even though the ageSymbol is not accessible from outside
 * makeAge() function, it REFERS TO THE SAME KEY as sym1 & sym2,
 * and therefore we are able to use them (sym1 & sym2) to access
 * this age.
 */

//Not possible with ordinary symbols:
//sym3 & genderSymbol are different ids.
console.log(person[sym3]); //undefined