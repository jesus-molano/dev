// THIS
// POINTER -> It refers to an object
const user = {
    name: "jesus",
};
const admin = {
    name: "admin",
};
function sayHi() {
    //function invoque new this keyword
    console.log(this);
}
const sayBye = () => {
    //arrow functions dont!
    console.log(this);
};

user.hi = sayHi;
admin.hi = sayHi;
user.bye = sayBye;
admin.bye = sayBye;
user.hi();
admin.hi();
user.bye();
admin.bye();
/////////////////////////////////////////////////////////////

const person = {
    firstName: "Jesus",
    lastName: "Molano",
    getName() {
        console.log(this.firstName + " " + this.lastName);
    },
};

function registerUser(country, lang) {
    //Aditional functionalility.....
    this.getName();
    console.log(`My country is ${country} and my language is ${lang}`);
}

// BIND
// function.bind(object) -> Links the object in parentheses to the function.
const register = registerUser.bind(person);
register("Spain", "Spanish");

// CALL
// Same as "Bind" but invokes it directly.
registerUser.call(person, "England", "English");

// APPLY
registerUser.apply(person, ["Germany", "German"]);

///////////////////////////////////////////////

//CONSTRUCTOR FUNCTION
function User(name, lastName, age, email) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

const user1 = new User("Jesus", "Molano", 25, "jesu@gmail.com");

console.log(user1);

// PROTOTYPE
// dont duplicate functions with the constructor
User.prototype.getName = function () {
    console.log(this.name);
};
user1.getName();
