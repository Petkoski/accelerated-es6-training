let name = 'Max';

//Backticks (``) are used in the examples below:
let desc1 = `
    Like this!
`; //Multiline strings
let desc2 = `Hello, I'm ${name}`; //Hello, I'm Max
let desc3 = `Hello, I'm ${name + ' !!!'}`; //Hello, I'm Max !!!

//Between the curly braces input anything that can be resolved to a string:
let desc4 = `Hello, I'm ${4 * 10}`; //Hello, I'm 40

//Escaping with backslash
let desc5 = `Hello, I'm \${name + ' !!!'}`; //Hello, I'm ${name + ' !!!'}

//console.log(desc1);
console.log(desc2);
console.log(desc3);
console.log(desc4);
console.log(desc5);