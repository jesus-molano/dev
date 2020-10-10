// Generate a random number -DONE
// Give the user the abillity to guess - DONE
// if they guess and they are wrong, ask again(hint) -DONE
// If they win - say that they won - DONE

function guessName() {
    let randomNum = Math.floor(Math.random() * 11);
    let guess;

    do {
        guess = prompt("Guess a number between 0 - 10");
        if (guess < randomNum) {
            alert("Your number is too low!");
        } else if (guess > randomNum) {
            alert("Your number is too high");
        }
    } while (guess != randomNum);
    alert("You Won!");
}

guessName();
