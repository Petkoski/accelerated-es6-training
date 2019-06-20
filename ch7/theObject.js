var obj1 = {
    a: 1
}

var obj2 = {
    b: 1
}

class Obj1 {
    constructor() {
        this.a = 1;
    }
}
class Obj2 {
    constructor() {
        this.b = 1;
    }
}
var obj3 = new Obj1();
var obj4 = new Obj2();

//Object.assign - merge multiple objects
var mergedObj = Object.assign(obj1, obj2);
//console.log(mergedObj); //Output: { a: 1, b: 1 }

//What happens when merging 2 objects which have different constructors (prototypes)
var mergedObject = Object.assign(obj3, obj4);
console.log(mergedObject); //Output: Obj1 { a: 1, b: 1 }

//What's the prototype of 'mergedObject':
console.log(mergedObject instanceof Obj1); //true
console.log(mergedObject.__proto__ === Obj1.prototype); //true

console.log(mergedObject instanceof Obj2); //false
console.log(mergedObject.__proto__ === Obj2.prototype); //false

console.log(mergedObject.__proto__ === Object.prototype); //false

/**
 * It received the instance of the first object we passed (obj3).
 * First passed object is the base (which has its prototype). The
 * other objects you merge, will be merged into the first. It's NOT
 * like if we are creating a new object.
 */

//Another interesting example:
var mergedObject2 = Object.assign({}, obj3, obj4);
console.log(mergedObject2); //Output: { a: 1, b: 1 }
//^We merged obj3 & obj4 into a new (empty) object {}


let person = {
    name: 'Max'
};
let boss = {
    name: 'Anna'
};
console.log(person.__proto__); //Output: {}
console.log(person.__proto__ === Object.prototype); //Output: true

//We already could set the prototype with the Object.create() method (built in function),
//but that's at the TIME OF CREATION of the object.

//Change prototype of an object AFTER it was created
Object.setPrototypeOf(person, boss);
console.log(person.__proto__ === Object.prototype); //Output: false (prototype was overridden)
console.log(person.__proto__ === boss); //Output: true
console.log(person.name); //Output: Max (JS isn't reaching to the prototype, already found this propery in the object itself)