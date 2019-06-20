//ES5:
function isEqualTo(number, compare) {
    return number == compare;
}

//ES6:
function isEqualTo2(number, compare = 10) { //default values
    return number == compare;
}
//console.log(isEqualTo2(10)); //true


function isEqualTo3(number = 10, compare) {
    return number == compare;
}
//console.log(isEqualTo3(10)); //false


function isEqualTo4(number = 10, compare) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
//console.log(isEqualTo4(11));
/**
 * Output:
 * 11
 * undefined
 * false
 */


function isEqualTo5(number = 10, compare = 10 / 2) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
//console.log(isEqualTo5(11));
/**
 * Output:
 * 11
 * 5
 * false
 */


function isEqualTo6(number = 10, compare = number) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
//console.log(isEqualTo6(11));
/**
 * Output:
 * 11
 * 11
 * true
 */

//console.log(isEqualTo6(11, 10)); //We can OVERRIDE the default value.
/**
 * Output:
 * 11
 * 10
 * false
 */


let a = 100;
function isEqualTo7(number = 10, compare = a) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
//console.log(isEqualTo7(11));
/**
 * Output:
 * 11
 * 100
 * false
 */


function isEqualTo8(number = compare, compare = 10) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
//console.log(isEqualTo8());
/**
 * Output:
 * compare is not defined
 */


//Other way aroud - works okay:
function isEqualTo9(number = 10, compare = number) {
    console.log(number);
    console.log(compare);
    return number == compare;
}
//console.log(isEqualTo9());
/**
 * Output:
 * 10
 * 10
 * true
 */