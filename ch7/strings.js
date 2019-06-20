let name = "Maximilian";

console.log(name.startsWith('Max')); //Output: true
console.log(name.endsWith('an')); //Output: true
console.log(name.endsWith('AN')); //Output: false (it's case sensitive)

console.log(name.includes('Max')); //Output: true (it checks everything)
console.log(name.includes('imi')); //Output: true
console.log(name.includes('IMI')); //Output: false