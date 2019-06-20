let keyValue = 1000;

function test() {
    keyValue = 2000;
    console.log("Tested!");
}

let ab = 'Some text';

export { keyValue, test };
export default ab; //Making this the default export (of this file)
/**
 * You may only have one default export in each file.
 */