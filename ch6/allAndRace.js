let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Resolved!');
    }, 1000);
});

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Rejected!');
        //res('Resolved!!');
    }, 2000);
});

/**
 * ALL:
 * Creates a Promise that is resolved with an array 
 * of results when all of the provided Promises resolve, 
 * or rejected when any Promise is rejected.
 * 
 * Waits all provided promises to finish and decides a
 * result.
 */
Promise.all([promise1, promise2]).then((succ) => {
    console.log(succ); //If all promises provided in the array are resolved
}, (err) => {
    console.log(err);
});


/**
 * Creates a Promise that is resolved or rejected 
 * when any of the provided Promises are resolved 
 * or rejected.
 * 
 * Waits for the fastest promise to finish and takes
 * the result of it in account.
 */
/*
Promise.race([promise1, promise2]).then((succ) => {
    console.log(succ);
}, (err) => {
    console.log(err);
});
*/