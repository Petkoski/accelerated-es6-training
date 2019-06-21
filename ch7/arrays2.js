/**
 * copyWithin(target: number, start: number, end?: number): number[]
 * It copies a value(es) INSIDE the base array
 * target = index where we want to paste
 */

let arr1 = [1, 2, 3];
console.log(arr1.copyWithin(1, 2)); //Output: [ 1, 3, 3 ]
console.log(arr1); //Output: [ 1, 3, 3 ] //Original arr is altered since we execute a method directly on it

let arr2 = [1, 2, 3];
console.log(arr2.copyWithin(1, 0, 2)); //Output: [ 1, 1, 2 ]
//How the above example works:
//1) Copies all elements between index 0 & 2 which are: 1, 2, 3
//2) Pastes them in position 1, so we have: [1, 1, 2, 3] (1 at index 0 is from the original arr)
//3) Cuts off the excessive part, so we end up with: [ 1, 1, 2 ]

/**
 * entries()
 * Returns an iterable of key, value pairs for every entry in the array
 */
let arr3 = [1, 2, 3];
console.log(arr3.entries()); //Output: Object [Array Iterator] {}

//That means we can assign it to a var:
let it = arr3.entries();

for (const elem of it) {
    console.log(elem);
}
/**
 * Output:
 * [ 0, 1 ] //Meaning: value at index 0 is 1
 * [ 1, 2 ]
 * [ 2, 3 ]
 */