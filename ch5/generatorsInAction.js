let obj = {
    [Symbol.iterator]: gen //Assigning [Symbol.iterator] to the created generator 'gen' [without (), not executing it, just assigning a reference to the function]
}

function* gen() { //Returns an iterator, exactly what we need in 'obj'
    yield 1;
    yield 2;
}

for (const el of obj) {
    console.log(el);
}
/**
 * Output:
 * 1
 * 2
 */

//Passing arguments which allows to write truly dynamic generators
function* gen2(end) {
    for (let i = 0; i < end; i++) {
        yield i;
    }
}
let it = gen2(2);
console.log(it.next()); //{ value: 0, done: false }
console.log(it.next()); // value: 1, done: false }
console.log(it.next()); //{ value: undefined, done: true }
console.log(it.next()); //{ value: undefined, done: true }

/**
 * Imagine the possibilities this offers. With the generator function,
 * we might have some async task and yield those results step by step
 * (like fetching sth from server). And after that, with the returned
 * iterator, we could then use them and take advantage of that step by
 * step approach (instead of having a single function that runs from 
 * start to end).
 */