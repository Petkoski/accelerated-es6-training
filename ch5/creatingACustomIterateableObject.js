let person = {
    name: 'Jovan',
    hobbies: ['Sports', 'Cooking', 'Programming'],
    [Symbol.iterator]: function() { // [Symbol.iterator] returns a unique id - based on it JS will recognize this object as iterable.
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length ? true : false, //Make sure to set done to 'false' at some point, otherwise you'll face an infinite for..of loop.
                    value: value
                }
            }
        }
    }
}
//^ We made this object iterable

for (let hobby of person) { //Iterating through it (similar as iterating through an array)
    console.log(hobby);
}