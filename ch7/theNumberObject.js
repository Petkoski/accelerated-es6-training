let num = NaN;
let num2 = 'NaN';
let num3 = 1000000000000000000000;
let num4 = Infinity;
let num5 = 10.1;

console.log(isNaN(num)); //Output: true
//It's also added to the Number object (why? just to group it all together)
console.log(Number.isNaN(num)); //Output: true
console.log(Number.isNaN(num2)); //Output: false

console.log(Number.isFinite(num)); //Output: false
console.log(Number.isFinite(num2)); //Output: false
console.log(Number.isFinite(num3)); //Output: true
console.log(Number.isFinite(num4)); //Output: false

//isInteger() - convenient way to find if value is a float
console.log(Number.isInteger(num)); //Output: false
console.log(Number.isInteger(num2)); //Output: false
console.log(Number.isInteger(num3)); //Output: true
console.log(Number.isInteger(num4)); //Output: false
console.log(Number.isInteger(num5)); //Output: false