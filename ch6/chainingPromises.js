function waitASecond(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            seconds++;
            resolve(seconds);
        }, 1000);
    });
}

waitASecond(0)
    .then(waitASecond)
    .then((secs) => {
        console.log(secs); //Output: 2 [after 2000ms]
    });
/**
 * 1) Call waitASecond(0) which gives a promise ('seconds' = 0)
 * 2) Waits 1 sec, increments 'seconds' to 1, resolves the promise and returns 1 back
 * 3) In the first 'then', call waitASecond again, but now with 1 as input param ('seconds' = 1) ['seconds' val is AUTO PASSED]
 * 4) Waits 1 sec, increments 'seconds' to 2, resolves the promise and returns 2 back
 * 5) In the second 'then', log the returned value (2).
 */