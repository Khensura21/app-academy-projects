const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});
const RIDDLER = rl;


//Secret num generator
const SECRET_NUMBER = 25;

//Compare user input: Number, against secret number

const checkGuess = userInput => {

    //convert user input into num datatype
    let guessedNum = Number(userInput);

    //if user num > secret num, print too high and return false
    if (guessedNum > SECRET_NUMBER) {
        console.log("TOO high jokester!")
        return false
    }
    //if the user num <  secret num, print too low and return false
    else if (guessedNum < SECRET_NUMBER) {
        console.log("TOO LOW! Try again, and this time, try not to embarrass yourself")
        return false
    } else { // if the user num is == to secret num print correct and return true
        console.log("At last, Correct! I thought you'd never guess it!");
        return true;
    }

};

//console.log(checkGuess(8));
//console.log(checkGuess(35));
//console.log(checkGuess(25));


const askGuess = () => {
    //riddler's prompt
    const PROMPT = `Greetings, victim. I'm the 🟢¿Riddler?🟢 Try to crack this puzzle: "I am a number between 1 and 30. What number am I ?"`

    //tell the ridller aka node asks the user some question
    RIDDLER.question(PROMPT, (answer) => {

        // once received, have the ridller pass the user answer off to the check guess function
        let checkedAnswer = checkGuess(answer);

        if (checkedAnswer === true) {
            console.log("At last, Correct! I thought you'd never guess it!");
        }
        //finally, dismiss the riddler aka exit the interface
        RIDDLER.close();

    });

}

console.log(askGuess())
    //console.log(askGuess())
    //console.log(askGuess())
