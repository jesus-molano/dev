//IF ELSE
let access = true;
if (access) {
    console.log("Hey mom! Im Tik Tok Famous");
} else {
    console.log("Hey I dont have access!");
}

//ELSE IF
const osOfPc = "Ubuntu";
if (osOfPc === "Windows") {
    console.log("You´re Cool!");
} else if (osOfPc === "IOS") {
    console.log("You´re The Devil!");
} else {
    console.log("Linux is the best!");
}

//AND OPERATOR
const age = 20;
const cleanShoes = true;
if (age >= 18 && cleanShoes) {
    console.log("You have access!");
} else {
    console.log("Hey, You are too young!");
}

//OR OPERATOR
const bloodType = "0-";
const covidPositive = false;
if (bloodType === "0+" || !covidPositive) {
    console.log("You are healty!");
} else {
    console.log("Get out of here!");
}
