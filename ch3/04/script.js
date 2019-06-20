//Default imports:
//import ab from './external.js'; //Not using curly braces (because this is a default import)
import a from 'external.js'; //Names also don't need to match ('ab' in the external file, 'a' here).

//Alias (to adjust imports to your needs):
import { keyValue as key, test } from 'external.js';

//Combining all imports (default and others):
//import a, { keyValue as key, test } from './external.js';

//Import everything:
//import * as imported from './external.js';
//Tell js to wrap all exports, pack them into an object & give me that object.

console.log(key);
test();
console.log(key);
console.log(a);

//console.log(imported); //It is an object: {keyValue: 1000, test: ƒ, default: "Some text"}\
//imported.test();