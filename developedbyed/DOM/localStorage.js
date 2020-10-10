//LOCAL STORAGE
// localStorage.setItem("todo", "Feed the cat"); //only strings

// //SESSION STORAGE
// sessionStorage.setItem("todoList", "Session Feed the cat");

const todoList = {
    todo1: "feeding the cat",
    todo2: "feeding myself",
};

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(retrieved);
