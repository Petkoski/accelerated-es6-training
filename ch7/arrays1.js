let arr1 = Array(5); //ES5 syntax
console.log(arr1); //Output: [ <5 empty items> ] //Populates all items with undefined

//Array.of()
let arr2 = Array.of(5, 10, 11);
console.log(arr2); //Output: [ 5, 10, 11 ]

//Array.from()
let arr3 = [10, 12, 16];
let newArr = Array.from(arr3, item => item * 2); //Two parameters to be passed: base array & map function
console.log(newArr); //Output: [ 20, 24, 32 ]
console.log(arr3); //Output: [ 10, 12, 16 ] //Old array remains same, we use it just as a base

//fill(value: number, start?: number, end?: number): number[]
let arr4 = [10, 12, 16];
arr4.fill(100);
console.log(arr4); //Output: [ 100, 100, 100 ]

let arr5 = [10, 12, 16];
arr5.fill(100, 1, 2); //The element at end index is excluded
console.log(arr5); //Output: [ 10, 100, 16 ]

//find()
let arr6 = [10, 12, 16];
console.log(arr6.find(val => val >= 12)); //Output: 12 //Stops after the first match, returns a single element, not an array

let inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];
let findCherries = (invItem) => invItem.name === 'cherries';
console.log(inventory.find(findCherries)); //Output: { name: 'cherries', quantity: 5 }
//In the find() method we pass A REFERENCE to the findCherries function
//Each inventory item will be auto passed to the findCherries function