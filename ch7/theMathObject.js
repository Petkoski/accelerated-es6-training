let num = -10;
let num2 = 10;
let num3 = 0;
let num4 = NaN;
let num5 = 'a string';

let num6 = 0.78;
let num7 = 3.78;
let num8 = -3.78;

//Math.sign(x) - returns the sign of x, indicating whether x is positive, negative or zero
console.log(Math.sign(num)); //Output: -1
console.log(Math.sign(num2)); //Output: 1
console.log(Math.sign(num3)); //Output: 0
console.log(Math.sign(num4)); //Output: NaN
console.log(Math.sign(num5)); //Output: NaN

//Math.trunc(x) - returns the integral part of x, removing any fractional digits
console.log(Math.trunc(num6)); //Output: 0
console.log(Math.trunc(num7)); //Output: 3

//Difference between Math.trunc(x) & Math.floor(x)
console.log(Math.floor(num8)); //Output: -4 (gives next lower number)
console.log(Math.trunc(num8)); //Output: -3 (just cuts off decimal places)