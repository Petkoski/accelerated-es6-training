/*function OldWayFn() {
    console.log('Hello');
}
OldWayFn();*/


//New way:
let fn = () => { // () stands for arguments to pass
    console.log('Hello2');
}
//fn();


//Shorter way - if one line of code
let fn2 = () => console.log('Hello3');
//fn2();


//Even shorter - when returning sth. & func. has 1 line of body
let fn3 = () => 'Hello4';
//console.log(fn3()); 

let fn4 = (a, b) => a + b;
console.log(fn4(1, 2));

//Shortest
let fn5 = a => a + 1; //Only case when no () is required in func. definition - when passing only 1 parameter
console.log(fn5(3));

//Usage example:
setTimeout(() => console.log('Hello after 1 sec'), 1000);