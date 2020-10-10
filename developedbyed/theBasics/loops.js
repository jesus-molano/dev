// FOR LOOPS
for (let i = 0; i < 100; i++) {
    if (i === 20) {
        console.log("You hit 20!");
        continue; //skip the rest of the code
    }
    if (i == 69) {
        console.log("You hit 69!");
        break; //finish the loop
    }
    console.log(i);
}

const texts = ["Hello everyone!", "Whats up!", "Hey broh!"];
for (let i = 0; i < texts.length; i++) {
    console.log(texts[i]);
}

// FOR OF
const names = ["Jesus", "Sam", "Paco", "Julia"];
for (let name of names) {
    console.log(name);
}

// FOR EACH (ONLY ARRAYS)
names.forEach(function (name, index) {
    console.log(name, index);
});

//FOR IN (OBJECTS)
const user = {
    name: "Jesus",
    age: 20,
    money: 1025,
    work: "Soldier",
};
for (let x in user) {
    console.log(x, user[x]);
}

// WHILE, DO WHILE
let num = 30;

while (num <= 50) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
} while (num >= 30);
