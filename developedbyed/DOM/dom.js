/************************************************************/
// const headers = document.getElementsByTagName("h2");
// console.log(headers);
// const list = document.getElementsByClassName("item");
// console.log(list);
// const button = document.getElementById("submit");
// console.log(button);

// const headers = document.querySelector("h2");
// console.log(headers);
// const list = document.querySelectorAll("h2.item");
// console.log(list);
// const links = document.querySelector("li a");
// console.log(links);
// const button = document.querySelector("#submit");
// console.log(button);
/************************************************************/

//NODE AND COLLECTIONS
const collectionItems = document.getElementsByClassName("item"); //COLLECTION
const todoList = document.querySelector("#todo-list"); //NODE
const nodeItems = document.querySelectorAll(".item"); //NODE
const todoNr = document.getElementsByClassName("todo-nr")[0]; //SELECT THE FIRST

console.log(collectionItems);
console.log(todoList.childNodes);

for (item of nodeItems) {
    console.log(item);
}
//FOR EACH NOT WORK WITH COLLECTIONS
nodeItems.forEach(function (item) {
    console.log(item);
});

/*******************************/
//CREATE  and ADD ELEMENT
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "New Item";
todoList.appendChild(newItem); //ADD NEW CHILD

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Another Item";
todoList.appendChild(anotherItem); //ADD NEW CHILD

//Update the ammount of items that we have
todoNr.innerText = collectionItems.length;
