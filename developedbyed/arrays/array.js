//OBJECTS AND ARRAYS REFERENCE TYPES
//WARNING!
const names = ["jesus", "sam", "angelica"];
const newNames = names;

newNames.push("alay");

console.log(newNames); //["jesus", "sam", "angelica", "alay"]
console.log(names); //["jesus", "sam", "angelica", "alay"]

//////////////////////////////////////////////////////////////////
// HIGHER ORDER FUNCTIONS
const videos = [
    "Html tutorial",
    "How to javascript",
    "ForEach tuto",
    "Learning Css",
];

function repeat(fn) {
    fn();
    fn();
    fn();
}

function sayHello() {
    console.log("Hello There!");
}

repeat(sayHello); // Hello There! x3

// FOREACH
videos.forEach(function (video) {
    console.log(video); //Html tutorial How to javascript ForEach tuto Learning Css
});

// MAP
const newVideos = videos.map(function (video) {
    return video.toUpperCase();
});

console.log(newVideos); //["HTML TUTORIAL", "HOW TO JAVASCRIPT", "FOREACH TUTO", "LEARNING CSS"]

// FIND (only the first)
const searchTutorial = videos.find(function (video) {
    return video.includes("Html");
});
console.log(searchTutorial); //Html tutorial

///////////////////////////////////////////////////
const games = [
    { title: "Mass Effect", rating: 9.5 },
    { title: "Metal Gear V", rating: 9.8 },
    { title: "League of Legends", rating: 7.8 },
    { title: "The Last Of Us", rating: 10 },
    { title: "Sims 4", rating: 4 },
];
// FILTER (multiple values)
const masterpieces = games.filter(function (game) {
    return game.rating > 9;
});
console.log(masterpieces);

//SOME and EVERY
const allGamesApproved = games.every(function (game) {
    return game.rating >= 5;
});

console.log(allGamesApproved); //false

const someGamesApproved = games.some(function (game) {
    return game.rating >= 5;
});
console.log(someGamesApproved); //true

// TERNARY OPERATOR
const ternaryArr = videos.map(function (video) {
    return video.length < 13 ? video : "nope";
});
console.log(ternaryArr);

// SORT
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 28, 15.1, 68, 33, 47, 2.6, 74];

items.sort();
console.log(items); //["Apple", "Banana", "Mango", "Orange"]
ratings.sort((a, b) => a - b); //sort with numbers
console.log("Lowest to highest: " + ratings);
ratings.sort((a, b) => b - a);
console.log("Highest to lowest: " + ratings);

// COPY AN ARRAY
const descRatings = [...ratings];
const allArr = [...items, ...ratings];
console.log(allArr);
