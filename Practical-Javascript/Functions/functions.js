/* Functions are just recipes */


makeTurkeySandwich
    Get one slice of bread.
    Add turkey
    Put a slice of bread on top. 

function makeTurkeySandwich () {
    Get one slice of bread;
    Add turkey;
    Put a slice of bread on top; 
}

makeTurkeySandwich ()

// Customizing Functions //

makeSandwichWith _____
    Get one slice of bread.
    Add _____.
    Put a slice of bread on top. 

function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top; 
}

makeSandwichWith _ham_
makeSandwichWith('ham')  // ham variable would be used //

console.log()

var todos = ['item 1', 'item 2', 'item 3'];

// it should have a function to display todos.
function displayTodos() {
    console.log('My todos:', todos);
}
// console.log means to display the info //



// it should have a function to add todos. //
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
// 'push' means to add an object to your array //


// it should have a function to change todos.
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// It should have a function to delete todos.
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
// 'splice' means to delete an item from the array //

