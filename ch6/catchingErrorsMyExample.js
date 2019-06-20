function alwaysReject() {
    return new Promise((resolve, reject) => {
        if(2 > 1)
            reject('Rejected!');
        else {
            setTimeout(() => {
                resolve('Done!');
            }, 1000);
        }
    });
}

alwaysReject().then((succ) => {
    console.log(succ);
}, (err) => {
    console.log('err:');
    console.log(err);
}).catch((err2) => {
    console.log('err2');
    console.log(err2);
});
/**
 * Output:
 * err:
 * Rejected!
 */