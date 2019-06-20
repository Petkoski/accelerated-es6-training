const AGE = 27;
//AGE = 29; //Error: Assignment to constant variable.​​

const AGES = [27, 29, 31];

console.log(AGES);

AGES.push(25); //Arrays & objects are REFERENCE types. AGES holds pointers to those values. Array is placed somewhere in memory, the const AGES hold a pointer to that space. So when pushing, we are not changing the pointer (we are not pointing to a new object), only changing the values to which the pointer points (totally valid).
console.log(AGES);

const OBJ = {
    age: 27
};
console.log(OBJ);

OBJ.age = 30; //Same as the array, OBJECT - REFERENCE TYPE.
console.log(OBJ);