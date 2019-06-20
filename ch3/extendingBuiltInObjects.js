class ConvertableArray extends Array { //'Array' is built-into into JS
    convert() { //Adding our custom method
        let returnArray = [];
        this.forEach(val => returnArray.push('Converted: ' + val));
        return returnArray;
    }
}

//We CAN'T use the brackets notation to create an array.
//let numberArr = []; //Not possible, this uses the default array, not our custom made one above.

//Consuming the method:
let numberArr = new ConvertableArray();
numberArr.push(1);
numberArr.push(2);
numberArr.push(3);

console.log(numberArr.convert()); //Output: [ 'Converted: 1', 'Converted: 2', 'Converted: 3' ]