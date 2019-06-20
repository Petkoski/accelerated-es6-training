//Exporting a variable:
export let keyValue = 1000; //Exporting the value

//Exporting a function:
export function test() {
    keyValue = 2000;
    console.log("Tested!");
}

/**
 * Combining the export:
 */
//export { keyValue, test }

//You can also export arrays, objects, classes, etc.