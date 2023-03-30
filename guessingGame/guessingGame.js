const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
});

const RIDDLER = rl;

let secretNum;
let numAttempts;

//Compare user input: Number, against secret number

const checkGuess = (userInput) => {
    //convert user input into num datatype
    let guessedNum = Number(userInput);

    //if user num > secret num, print too high and return false
    if (guessedNum > secretNum) {
        console.log("--> 🟢 Riddler: TOO high jokester! Try again! ❌");
        return false;
    }
    //if the user num <  secret num, print too low and return false
    else if (guessedNum < secretNum) {
        console.log(
            "--> 🟢 Riddler: TOO LOW! Try again, and this time, try not to embarrass yourself! ❌"
        );
        return false;
    } else {
        // otherwise the user guess is correct, so return true
        return true;
    }
};

const askGuess = () => {
    //riddler's prompt
    const PROMPT = `--> 🟢 Riddler: Now riddle me this, can you guess the number? `;

    //tell the ridller aka node asks the user for their guess
    RIDDLER.question(PROMPT, (answer) => {
        // Ridller checks user guess
        let checkedAnswer = checkGuess(answer);

        //if their guess is true
        if (checkedAnswer) {
            console.log(
                "--> 🟢 Riddler: At last, Correct! I thought you'd never guess it! 🪄 ✅"
            );
            // End game and dismiss the riddler aka exit the interface, Game over
            RIDDLER.close();
        } else {

            // end game if player is out of attempts
            if (numAttempts === 0) {
                // End game and dismiss the riddler aka exit the interface, Game over
                console.log("You Lose! Better luck next time, if there is a next time, that is...🤡");
                RIDDLER.close();
            } else {
                //decrement player number of attempts
                --numAttempts;
                //Then Ask riddler to ask for another guess!
                askGuess();
            }

        }
    });
    //console.log("oops, I didn't wait for riddler")
    // just so that ugly undefined keyword wont show in node
    return "";
};

function randomInRange(min, max) {
    // round min argument to next greater whole int
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.random() * (max - min + 1) + min;
    return Math.floor(randomNum);
}

function askRange(minNum, maxNum) {

    // Riddler prompt to get min number
    const ASK_FOR_MIN =
        "-> 🟢 Riddler: Please tell me the min numbers first:  ";
    // Riddler prompt to get MAX number
    const ASK_FOR_MAX = "Now tell me the max number:  ";

    // ask riddler to ask user for min number
    RIDDLER.question(ASK_FOR_MIN, (userInput) => {
        minNum = Number(userInput);

        //then right after as for a max num for the range
        RIDDLER.question(ASK_FOR_MAX, (userInput) => {
            maxNum = Number(userInput);

            // generate secret number based on user inputs
            secretNum = randomInRange(minNum, maxNum);

            RIDDLER.question

            // begin game
            askGuess();
        });
    });

    return "";
}

function askLimit() {
    const ASK_FOR_RANGE = ` -> 🟢 Riddler: Greetings, dear victim. I'm the ❔❔Riddler❔❔, Let's play a game where YOU GUESS the num I'm thinking of between two nums of your choice. Now, how many guesses would you like ?`

    RIDDLER.question(ASK_FOR_RANGE, userInput => {
        numAttempts = Number(userInput) - 1;
        askRange();

    })

    return "";
}

console.log(askLimit());