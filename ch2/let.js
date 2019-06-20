let age = 30;
if (true) {
    let age = 27; //allows us to use BLOCK scoping in the body where it is defined.
    console.log(age);
}
age = 29;
console.log(age); 