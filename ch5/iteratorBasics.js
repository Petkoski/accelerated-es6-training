//Built-in array iterator and how to use it:

let array = [1, 2, 3];

//Iterator - built-in symbol this 'array' object has.
//An object is iterable if it has a certain well-known symbol built in (that's JS way of knowing you can loop over it).

console.log(typeof array[Symbol.iterator]); //Output: function
let it = array[Symbol.iterator](); //Executing that function
console.log(it); //Output: Object [Array Iterator] {}

//It's an object that only has one method - next() method.
console.log(it.next()); //Output: { value: 1, done: false }
console.log(it.next()); //Output: { value: 2, done: false }
console.log(it.next()); //Output: { value: 3, done: false }
console.log(it.next()); //Output: { value: undefined, done: true }
//^Stepping through the values with each call.
//Done is set to true once it really exhausts all values in the collection.

//Iterator - an object which knows how to access a collection. 