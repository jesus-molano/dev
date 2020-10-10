const button = document.getElementById("submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");
const items = todoList.children;

// ATTACH A EVENT LISTENER (CLICK, SCROLL, RESIZING...)
button.addEventListener("click", function (e) {
    e.preventDefault();
    //Create element
    const newItem = document.createElement("li");
    //Adding class
    newItem.classList.add("item");
    //Adding the text
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
    //Delete the value from the input
    nameInput.value = "";
    //Create the element and attaching the listener
    newItem.addEventListener("click", deleteItem);
});
// e equal a Event
function deleteItem(e) {
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener("click", function () {
    todoList.classList.toggle("fade");
});
