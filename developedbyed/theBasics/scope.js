//GLOBAL SCOPE
let food = "apple";
let fruits = 5;
var x = 10; //DANGEROUS! CHANGE IN BLOCK SCOPE

function store() {
    // FUNCTION SCOPE
    let food = "banana";
    let fruits = 50;
}

// BLOCK SCOPE
for (let fruits = 0; fruits < 10; fruits++) {
    console.log(fruits);
}

console.log(fruits, food, x);
