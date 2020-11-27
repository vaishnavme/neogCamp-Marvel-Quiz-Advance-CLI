var readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;

var userName = readlineSync.question("What is your name? ");
log("Hi " + userName + "!");
log(chalk.bgYellow.white.bold("READY TO PLAY MARVAL GEEK!! \n"));
log("There are TWO Level.");
log(
  "Level One require 3 Righ Answers to get you in Final Level.\nEvery Question have 2 Marks"
);
log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");

var levelScore = 0;

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    log(chalk.underline.green.bold("Right!!"));
    levelScore = levelScore + 2;
  } else {
    log(chalk.underline.red.bold("Wrong!!"));
  }
  log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
}

const levelOne = [
  {
    question: `
    1. What was the first Marvel Studio film?
    A: The Incredible Hulk
    B: Iron Man
    C: The Hulk
    D: Thor\n`,
    answer: "B",
  },
  {
    question: `
    2. What is the name of Thor’s hammer?
    A: Vanir
    B: Strombreaker
    C: Mjolnir
    D: Aesir\n`,
    answer: "C",
  },
  {
    question: `
    3. In How many phases Marvel films are divided?
    A: Three
    B: Two
    C: Four\n`,
    answer: "A",
  },
  {
    question: `
    4. In which movie Thonas appeared for the first time?
    A: Guardian Of Galaxy
    B: Thor
    C: The Avengers\n`,
    answer: "C",
  },
  {
    question: `
    5. What is Captain America’s shield made of?
    A: Adamantium
    B: Vibranium
    C: Promethium
    D: Carbonadium\n`,
    answer: "B",
  },
];

const finalLevel = [
  {
    question: `
  6. What is Loki's title?\n`,
    answer: "God of Mischief",
  },
  {
    question: `
  7. Who killed Tony Stark’s parents?\n`,
    answer: "Winter Soldier",
  },
  {
    question: `
  8. Who is the leader of the S.H.I.E.L.D?\n`,
    answer: "Nick Fury",
  },
];

for (var i = 0; i < levelOne.length; i++) {
  var currentQuestion = levelOne[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

if (levelScore >= 3) {
  log(
    chalk.bgGreen.bold(
      "\nYAY! You Made it!!\nWelcome to Level Two\n Get Ready!!"
    )
  );

  for (var i = 0; i < finalLevel.length; i++) {
    var currentQuestion = finalLevel[i];
    quiz(currentQuestion.question, currentQuestion.answer);
  }
} else {
  log(chalk.bgRed.white("Sorry!! You didn't Clear Level One!!"));
}

log(chalk.blue.bold("\nYou SCORED: ", levelScore));

log("\nCheck out the Scores");

const highScore = [
  {
    Name: "Vaishnav",
    "Level One": 5,
    "Final Level": 2,
  },
  {
    Name: "Atharv",
    "Level One": 4,
    "Final Level": 3,
  },
];

console.table(highScore);
