var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// this function render todos
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // empty the todoList HTML 
  todoList.innerHTML = "";
  // show the number of todos entered
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // iterate over the todos array, creating new li elements for each todo item
  // and then append to html element 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// reloads the todolist that were being stored in localStorage
function init() {
  // TODO: What is the purpose of the following line of code?
  // using parse to extract todosList from localstorage and assign it to storedTodos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // check if any null in storedTodos
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // invoke renderTodos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // store todos using stringify into localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}


// TODO: Describe the purpose of the following line of code.
// listen to a submit button
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // see if todoText is empty and stops the function
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // adds todoText to the todos array in the back
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // store todos in string format into localStorage
  storeTodos();
  // render the todos list on the html
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// listens to a click on todoList
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
