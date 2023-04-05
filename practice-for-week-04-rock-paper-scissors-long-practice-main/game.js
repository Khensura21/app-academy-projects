const readline = require("readline");

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: "Rock",
    winsAgainst: "s",
  },
  p: {
    name: "Paper",
    winsAgainst: "r",
  },
  s: {
    name: "Scissors",
    winsAgainst: "p",
  },
};

const MESSAGES = {
  invalidCommand: "\nInvalid Command.\n",
  prompt: ">",
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
const SCORE = () => `${wins} wins - ${losses} losses - ${ties} ties`;

function printHelp() {
  // Your code here
  console.log("\nHelp:\n");
  Object.keys(VALID_MOVES).forEach((moveKey) => {
    console.log(`  Type ${moveKey} for ${VALID_MOVES[moveKey].name}`);
  });
  console.log("  Type 'q' to quit");
}

function getWinner(move1, move2) {
  // Your code here
  if (move1 === move2) {
    // tie
    return 0;
  } else if (VALID_MOVES[move1].winsAgainst === move2) {
    // win
    return 1;
  } else {
    // loss
    return -1;
  }
}

function getCPUMove() {
  // Your code here
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return validMoveKeys[randomIndex];
}

function processMove(cmd, cpu) {
  //print out player moves
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  let matchResults = getWinner(cmd, cpu);

  if (matchResults == 1) {
    console.log("You win!\n");
    wins++;
  } else if (matchResults == -1) {
    console.log("You lose...\n");
    losses++;
  } else {
    console.log("You tie.\n");
    ties++;
  }
}

/******************************* MAIN FUNCTION *******************************/
// extract the actually game play from the user input function
// this follows the SR(P)rinciple
function playGame(cmd) {
  if (VALID_MOVES[cmd]) {
    const cpu = getCPUMove();
    processMove(cmd, cpu);
  } else {
    console.log(MESSAGES.invalidCommand);
    printHelp();
  }
}

function promptInput(rl) {
  console.log(SCORE());
  rl.question(MESSAGES.prompt, (cmd) => {
    cmd = cmd.toLowerCase();
    if (cmd === "h") {
      printHelp();
    } else if (cmd === "q") {
      rl.close();
      return;
    } else {
      playGame(cmd);
    }
    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp();
  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== "undefined" && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput,
};
