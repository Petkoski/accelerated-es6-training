/**
 * In ES6 modules are built into the language.
 * Traceur (google tool): a compiler that takes ES6
 * (including classes, generators, destructuring and
 * much more) and compiles it down to regular ES5 js
 * that runs in your browser.
 * SystemJS: a module loader that can import modules at 
 * run time (load modules after code has been compiled).
 */

//Importing from other file (external.js is NOT mentioned in index.html):
//Import name (keyValue) has to match the export name (in external.js, also keyValue)
//In the final version (or running in the browser in future), extension ('.js') won't 
//be required when importing.
import { keyValue } from './external.js';
import { test } from './external.js';

//Or combine them (since are coming from same file):
//import { keyValue, test } from './external.js';

console.log(keyValue);
test();
console.log(keyValue); //keyValue is changed in the test() method.
/**
 * Importing REFERENCES (links to the actual things) not values:
 * Imported keyValue really is just A REFERENCE to the variable
 * in ./external.js. It's not copied over, value is NOT copied, just the reference.
 * Therefore, if we execute code that changes the value (like test() method does),
 * then the value will be changed.
 */