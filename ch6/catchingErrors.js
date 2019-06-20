function waitASecond(seconds) {
    return new Promise((resolve, reject) => {
        if(seconds > 2)
            reject('Rejected!');
        else {
            setTimeout(() => {
                seconds++;
                resolve(seconds);
            }, 1000);
        }
    });
}

waitASecond(2)
    .then(waitASecond)
    .then((secs) => {
        console.log(secs); //Output: 2 [after 2000ms]
    })
    .catch((err) => {
        console.log(err);
    });
/**
 * .catch() - The callback to execute when the Promise is rejected.
 * The catch() block will always get executed once the promise
 * is rejected at any point of time (no matter if then() blocks in 
 * front have been successful or not).
 * To catch any errors right away, no matter when they happen.
 */