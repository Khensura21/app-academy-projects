const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});
const RIDDLER = rl;


//Secret num generator
const SECRET_NUMBER = 9;

//Compare user input: Number, against secret number

const checkGuess = userInput => {

    //convert user input into num datatype
    let guessedNum = Number(userInput);

    //if user num > secret num, print too high and return false
    if (guessedNum > SECRET_NUMBER) {
        console.log("--> 🟢 Riddler: TOO high jokester! ❌")
        return false
    }
    //if the user num <  secret num, print too low and return false
    else if (guessedNum < SECRET_NUMBER) {
        console.log("--> 🟢 Riddler: TOO LOW! Try again, and this time, try not to embarrass yourself! ❌")
        return false
    } else { // if the user num is == to secret num print correct and return true
        return true;
    }

};




const askGuess = () => {
    //riddler's prompt
    const PROMPT = `--> 🟢 Riddler: Greetings, dear victim. I'm the ❔❔Riddler❔❔. Crack this puzzle: "I am a number between 1 and 10. What number am I ?"`

    //tell the ridller aka node asks the user some question
    RIDDLER.question(PROMPT, (answer) => {

        // once received, have the ridller pass the user answer off to the check guess function
        let checkedAnswer = checkGuess(answer);

        if (checkedAnswer === true) {
            console.log("--> 🟢 Riddler: At last, Correct! I thought you'd never guess it! 🪄");
            // then finally, dismiss the riddler aka exit the interface
            RIDDLER.close();
        } else { //otherwise call the riddler again!
            askGuess();
        }

    });

    // just so that ugly undefined keyword wont show in node
    return '';

}
