let numbers = [1, 2, 3, 4, 5];

function sumUp(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

/**
 * The rest operator - three dots ...
 * Converts/packs the passed list of numbers (100, 10, 20)
 * to an ARRAY of numbers (array's name will be 'arr').
 */
function sumUpNew(...arr) { //Function does not know how many args would get
    console.log(arr); //Output: [ 100, 10, 20 ]
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

console.log(sumUp(numbers));
console.log(sumUpNew(100, 10, 20));
console.log(sumUpNew(100, 10, "20")); //Output: 11020