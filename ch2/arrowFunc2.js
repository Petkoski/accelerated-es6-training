//SUPER IMPORTANT KEY DIFFERENCE:

//Ordinary function:
function fn() {
    console.log(this); //this refers to WHAT CALLED THIS FUNCTION. For example, if this func. is used as button click handler, 'this' will refer to that button element.

    //This might be the behavior you want, but in most languages - that's not the behavior you expect. You wouldn't expect for 'this' to change its context and refer to different things (depending on what called the function).
}

//Fat arrow function:
let fn2 = () => console.log(this);
//Keeps its context, that is super important. That's the main difference - this is treated differently.
//You don't need bind() or apply(), it will keep its context as when the function is defined.
//If 'this' refers to the window object (when the function is defined), it WILL refer to that window object no matter how or where you call the function.

fn2();