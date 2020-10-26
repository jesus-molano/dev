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

///////////////////////////////////////////////////
//Constructor Enemy
function Enemy(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
}
Enemy.prototype.getInfo = function () {
    console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function () {
    console.log(`${this.name} has attacked`);
};
Enemy.prototype.block = function () {
    console.log(`${this.name} has blocked`);
};

//Constructor Dragon
function Dragon(life, name, level, color, spell) {
    //Keyword this is going reference the Dragon object
    Enemy.call(this, life, name, level);
    //Define it as normal
    this.color = color;
    this.spell = spell;
}
// INHERIT PROTOTYPE
Dragon.prototype = Object.create(Enemy.prototype);
Dragon.prototype.fireBreath = function () {
    console.log("FireBreathhhh!!!");
};
const newDragon = new Dragon(100, "Drogon", 20, "black", "Drakaris");

console.log(newDragon);
newDragon.getInfo();

/////////////////////////////////////////////////////////
// CLASES
class Ally {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }
    getInfo() {
        console.log(this.life, this.name, this.level);
    }
}
const ally = new Ally(100, "Dante", 25);
console.log(ally);

class Pet extends Ally {
    constructor(life, name, level, legs, dmg) {
        super(life, name, level);
        this.legs = legs;
        this.dmg = dmg;
    }
}
const pet = new Pet(100, "Alay", 10, 4, 300);
console.log(pet);
pet.getInfo();
