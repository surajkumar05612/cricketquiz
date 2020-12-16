//modules//
var readlineSync = require('readline-sync');
const chalk = require('chalk');

//intro
var userName = readlineSync.question(chalk.yellow("Tell me your name "));
console.log(chalk.bold.bgRgb(176, 45, 12)("Welcome "+ userName +" Let's Test Your knowledge about Cricket"));
console.log(chalk.bold.grey("******************"));

//global variable
var score = 0,highScore=7;

//function for questions
function quiz(question, answer){
  var userAnswer = readlineSync.question(chalk.bold(question));
  if(userAnswer===answer){
    console.log(chalk.bgRgb(45, 145, 72)("Hurray!! You Got It Right, let me add one point to your score "));
    score= score + 1;
  }
  else{
    console.log(chalk.bgRgb(222, 18, 18)("Oops! you guessed it wrong "));
  }
console.log(chalk.bgRgb(158, 81, 181)("Current Score: "+score));
console.log(chalk.bold.grey("******************"));
}

//set of questions in an array
var questions = [
  {
    question: "Which country have won maximum number of ICC cricket world cup trophy ? "+'\n'+'India'+'\n'+'Australia'+'\n'+'West Indies  ',
    answer: "Australia"
  },
   {
    question: "when ICC cricket world cup first organised ? "+'\n'+'1980'+'\n'+'1975'+'\n'+'1960  ',
    answer: "1975"
  },
   {
    question: "Which country ranks first in ODI format in 2020 ? "+'\n'+'India'+'\n'+'Australia'+'\n'+'England  ',
    answer: "England"
  },
   {
    question: "which bowler ranks first in ODI format in 2020 ? "+'\n'+'Jasprit Bumrah'+'\n'+'Trent Boult'+'\n'+'Chris Woakes  ',
    answer: "Trent Boult"
  },
   {
    question: "Which bowler ranks first in  T20 format in 2020 ? "+'\n'+'Mujeeb Ur Rahman'+'\n'+'Ashton Agar'+'\n'+'Rashid Khan  ',
    answer: "Rashid Khan"
  },
  {
    question: "Who is the captain of Indian cricket team Now ? "+'\n'+'Rohit Sharma'+'\n'+'Kl Rahul'+'\n'+'Virat Kohli  ',
    answer: "Virat Kohli"
  },
  {
   question: "Which country ranks first in Test match format  ? "+'\n'+'India'+'\n'+'Australia'+'\n'+'England  ',
    answer: "Australia"
  },
  {
    question: "Which team won title of IPL 2020 ? "+'\n'+'Delhi Daredevils'+'\n'+'Mumbai Indians'+'\n'+'Kings XI Punjab  ',
    answer: "Mumbai Indians"
  },
  {
    question: "Who scored maximum runs in IPL 2020 ? "+'\n'+'Kl Rahul'+'\n'+'David Warner'+'\n'+'Shreyas Iyer  ',
    answer: "Kl Rahul"
  },
  {
    question: "Who took maximum wickets in IPL 2020 ? "+'\n'+'Jasprit Bumrah'+'\n'+'Trent Boult'+'\n'+'Kagiso Rabada  ',
    answer: "Kagiso Rabada"
  }  
];

//loop for accessing every question from array
for(var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
};

//scores and highscore details
console.log(chalk.bold.grey("******************"));
if(score>highScore){
  console.log(chalk.bgRgb(37, 154, 156)("You have Scored "+score+'\n'+"Congratulations You Have Set A New HighScore Please Send A Screenshot to Me on my social accounts"));
}
else{
console.log(chalk.bgRgb(227, 50, 34)("Unfortunately! you were unable to beat the High Score.."));
console.log(chalk.bgRgb(
97, 49, 168)("current High score is "+highscore));
};
console.log(chalk.bold.grey("******************"));
console.log("Thanks for participating");