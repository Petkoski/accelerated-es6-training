function* select() { //The star (*) makes this function a generator.
    yield 'House'; //Kind of return
    yield 'Garage';
}

select(); //Output: nothing on console. By running a generator, we get back AN ITERATOR (get back an object for which we can loop).

let it = select();
console.log(it.next()); //{ value: 'House', done: false }
console.log(it.next()); //{ value: 'Garage', done: false }
console.log(it.next()); //{ value: undefined, done: true }
//^Looping through thouse yielded values

/**
 * Generators allows us to create a logic contained in a function
 * to yield different values.
 * And then we can use the iterator it (generator) will return, to 
 * loop through those values.
 */