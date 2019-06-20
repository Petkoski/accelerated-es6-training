let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(1 > 2)
            resolve('Done!');
        else
            reject('Failed!');
    }, 1500);
});

//Handling rejected promise:
promise.then((success) => {
    console.log(success);
}, (reject) => {
    console.log(reject);
});