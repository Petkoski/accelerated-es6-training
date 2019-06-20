//Creating a promise:
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Done!');
    }, 1500);
});

//Using it:
promise.then(function(val) {
    console.log(val); //Output: Done! [after 1500 ms]
});