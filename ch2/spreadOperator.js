//Opposite of the rest operator
///Looks exactly the same, differ by the place where are used.

let numbers = [1, 2, 3, 4, 5];
console.log(Math.max(numbers)); //Output: NaN - because Max.max expects a LIST of numbers, not an array.
console.log(Math.max(...numbers)); //Output: 5
console.log(...numbers); //Output: 1 2 3 4 5

//Spread operator - loops through the array and splits it up into individual values (a list of)

//Spread operator: we have a function CALL where we pass parameters to the function.
//Rest operator: writing our own function, in the list of arguments the function expects