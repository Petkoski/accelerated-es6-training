function* gen(end) {
    for (let i = 0; i < end; i++) {
        try {
            yield i;
        } catch (error) { //Handling errors:
            console.log(error);
        }
    }
}
let it = gen(10);
console.log(it.next());
//console.log(it.throw());
console.log(it.throw('An error occured!')); //Producing/forcing an error
console.log(it.next()); //Continues (because there is catch logic in the generator, otherwise - sets 'done' to true [finishes/doens't continue])
console.log(it.return('An error!')); //Overriding the returned 'value' and finishing the generator
console.log(it.next()); //We are done here (even that '10' was provided as a param)

/**
 * From developer.mozilla:
 * You can force a generator to throw an exception by calling its throw() method and passing the exception value it should throw. This exception will be thrown from the current suspended context of the generator, as if the yield that is currently suspended were instead a throw value statement. 
 * If the exception is not caught from within the generator,  it will propagate up through the call to throw(), and subsequent calls to next() will result in the done property being true.
 * 
 * Generators have a return(value) method that returns the given value and finishes the generator itself.
 */