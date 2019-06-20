class Helper {
    logTwice(message) {
        console.log(message);
        console.log(message);
    }

    static logThreeTimes(message) {
        console.log(message);
        console.log(message);
        console.log(message);
    }
}

let help = new Helper(); //We must instantiate a new object
help.logTwice('Log message!'); //Works
//Helper.logTwice('Log message!'); //Does not work (directly on the class without instantiating)

Helper.logThreeTimes('Log!') //It works (without creating an object)