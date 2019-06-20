//Why is the iterator thing useful?
//1. Make any object iterable. Just implement the 'Symbol.iterator' (in the next file).
//2. Override behavior (including built-in ones, like array)

//2:
let arr = [1, 2, 3];
arr[Symbol.iterator] = function() { //Core of the iterator
    let nextValue = 10;
    return { //Returns an object
        next: function() { //That has this next() function
            nextValue++;
            return { //That returns an object with done & value
                done: nextValue > 15 ? true : false,
                value: nextValue
            }
        }
    }
}

for (let el of arr) {
    console.log(el);
}
/** Output:
 * 11
 * 12
 * 13
 * 14
 * 15
 */
//^ We changed the behavior we loop through this array.