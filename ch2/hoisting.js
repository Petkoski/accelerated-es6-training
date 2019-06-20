age = 27;
console.log(age);
var age; //Hoisting VAR - declaring after initialization


// age2 = 27;
// console.log(age2); //age2 is not defined
// let age2; //Hoisting with variables with LET & CONST DOESN'T work the way it works with VAR.


function doSth() {
    age3 = 27;
}
let age3; //Declaration
doSth(); //Usage. It works because its is actually declared before it is used.
console.log(age3);
