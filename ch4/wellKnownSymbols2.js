let numbers = [1, 2, 3];

//Array is just an object, therefore we can access properties
numbers[Symbol.toPrimitive] = function() {
    return 999;
}

console.log(numbers + 1);
//By default: 1,2,31 (converts the array to string and appends '1')
//But now: 1000

/**
 * Big advantage is:
 * Use the well-known symbols to override default
 * behavior on built-in objects.
 */