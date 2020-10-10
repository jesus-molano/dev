const addButton = document.getElementById("add");
const delButton = document.getElementById("del");
const toggleButton = document.getElementById("toggle");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const items = todoList.children;

//ATTACH A EVENT LISTENER (CLICK, SCROLL, RESIZING...)
// addButton.addEventListener("click", function () {
//     const newItem = document.createElement("li");
//     newItem.classList.add("item");
//     newItem.innerText = `Item ${items.length + 1}`;
//     todoList.appendChild(newItem);
//     todoNr.innerText = items.length;
// });

addButton.addEventListener("click", function () {
    //we can do this or...
    // mainTitle.style.color = "red";
    // mainTitle.style.fontSize = "50px";
    //css class :
    mainTitle.classList.add("spectacular");
});

delButton.addEventListener("click", function () {
    mainTitle.classList.remove("spectacular");
});

toggleButton.addEventListener("click", function (e) {
    console.log(e);
    mainTitle.classList.toggle("spectacular");
});
