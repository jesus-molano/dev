let fruit = prompt("Tell me a fruit").toLowerCase();

switch (fruit) {
    case "banana":
        alert("Wow I love bananas too!");
        break;
    case "apple":
        alert(`I don't like apples`);
        break;
    case "kiwi":
        alert("Fuck Kiwis!");
        break;
    default:
        alert("What fruit is that?");
}
