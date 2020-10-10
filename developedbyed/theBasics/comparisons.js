//Equal to
5 == 5; //TRUE

//Not Equal
5 != 8; //TRUE
4 != 4; //FALSE

//Less or Bigger
5 > 2; //TRUE
5 <= 6; // TRUE
3 < 8; //TRUE
2 <= 2; //TRUE

//NEVER EVER USE DOUBLE EQUALS
//USE TRIPLE === (Include Variable Types)
10 == "10"; //TRUE
10 === "10"; //FALSE

//TRUTHY OR FALSY
const age = 0;

if (age) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsy"); //false, 0 , null, "", undefined, NaN
}
