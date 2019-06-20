//Destructure a complex array into a simpler one [or simple element(s)]
//Important notes:
//a) Not changing the original object
//b) Array destructuring - you pull out elements by their position (in the original arr)

let numbers = [1, 2, 3];

//Old way:
let a_old = numbers[0];
let b_old = numbers[1];

//New way (new syntax):
let [a, b] = numbers; //Quick way to extract values from an array

console.log(a); //1
console.log(b); //2
console.log(numbers); //Original array is still as before: [ 1, 2, 3 ]

//Pulling more values than this array has:
let [c, d, e, f] = numbers;
console.log(f); //undefined

//Using the rest operator (to retrieve a part):
let [g, ...h] = numbers;
console.log(h); //[ 2, 3 ]

//Mixed array of numbers and a string:
let numbers2 = [1, 2, "3"]; //Still works
let [i, ...j] = numbers2;
console.log(j); //[ 2, '3' ]

//Default values (two cases):
let [k = "default val", l, m, n = "default val"] = numbers2;
console.log(n); //default val (preparing for the case when the value we are pulling is undefined)
console.log(k); //1 (default value is NOT used)

//Quickly swap values:
let o = 5;
let p = 10;
[p, o] = [o, p];
console.log(o); //10
console.log(p); //5

//Ignore certain values:
let [q, , r] = numbers;
console.log(q); //1
console.log(r); //3

//Immediate destructuring (don't need to declare an array):
let [s, t] = [1, 2, 3];
console.log(s, t); //1 2