const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
});

const RIDDLER = rl;

let secretNum;

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
        // if the user num is == to secret num print correct and return true
        return true;
    }
};

const askGuess = () => {
    //riddler's prompt
    const PROMPT = `--> 🟢 Riddler: Now riddle me this, can you guess the number? `;

    //tell the ridller aka node asks the user some question
    RIDDLER.question(PROMPT, (answer) => {
        // once received, have the ridller pass the user answer off to the check guess function
        let checkedAnswer = checkGuess(answer);

        if (checkedAnswer) {
            console.log(
                "--> 🟢 Riddler: At last, Correct! I thought you'd never guess it! 🪄 ✅"
            );
            // then finally, dismiss the riddler aka exit the interface, Game over
            RIDDLER.close();
        } else {
            //otherwise call the riddler again!
            askGuess();
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
    const ASK_FOR_MIN =
        "-> 🟢 Riddler: Greetings, dear victim. I'm the ❔❔Riddler❔❔, I shall choose a number between two values of your choosing, and you must guess what that number is. Please tell me the min number first:  ";
    const ASK_FOR_MAX = "Now tell me the max number:  ";

    // ask riddler to ask user for min number
    RIDDLER.question(ASK_FOR_MIN, (userInput) => {
        minNum = Number(userInput);

        //then right after as for a max num for the range
        RIDDLER.question(ASK_FOR_MAX, (userInput) => {
            maxNum = Number(userInput);

            // generate secret number based on user inputs
            secretNum = randomInRange(minNum, maxNum);

            // begin game, and pass the secret number so the riddler can have a reference to it
            askGuess();
        });
    });

    return "";
}

console.log(askRange());