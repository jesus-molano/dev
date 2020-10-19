//Normal Function
function singUp() {
    let name = prompt("What is your name?");
    greet(name);
}

//Function with parameters
function greet(name) {
    console.log("Welcome to our website " + name);
}

//Call function
singUp();

function max(num1 = 0, num2 = 0) {
    //default parameters
    if (num1 > num2) {
        return num1;
    } else {
        num2;
    }
}

// Arrow Functions

const sayHello = () => {
    console.log("Hi!");
};
