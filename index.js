var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.yellow("Tell me your name "));
console.log(chalk.bold.bgRgb(176, 45, 12)("Welcome "+ userName +" Let's Test Your knowledge about Cricket"));
console.log(chalk.bold.grey("******************"));
console.log(chalk.bold("Choose the Corerct Option:- "));
console.log(chalk.bold.grey("******************"));

var score = 0,highScore=7;

function quiz(question, answer){
  var userAnswer = readlineSync.question(chalk.bold(question));
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bgRgb(45, 145, 72)("Hurray!! You Got It Right, let me add one point to your score "));
    score= score + 1;
  }
  else{
    console.log(chalk.bgRgb(222, 18, 18)("Oops! you guessed it wrong "));
  }
console.log(chalk.bgRgb(158, 81, 181)("Current Score: "+score));
console.log(chalk.bold.grey("******************"));
}

var questions = [
  {
    question: `Which country have won maximum number of ICC cricket world cup trophy ?
    a: Australia
    b: India
    c: England  `,
    
    answer:'a'
  },
   {
    question: `when ICC cricket world cup first organised ? 
    
    a: 1980
    b: 1975
    c: 1960   `,
    answer: 'b'
  },
   {
    question: `Which country ranks first in ODI format in 2020 ?
    a: India
    b: Australia
    c: England  `,
    answer: 'c'
  },
   {
    question: `which bowler ranks first in ODI format in 2020 ?
    a: Jasprit Bumrah
    b: Trent Boult
    c: Chris Woakes  `,
    answer: "b"
  },
   {
    question: `Which bowler ranks first in  T20 format in 2020 ? 
    a: Mujeeb Ur Rahman
    b: Ashton Agar
    c: Rashid Khan  `,
    answer: 'c'
  },
  {
    question: `Who is the captain of Indian cricket team Now ? 
    a: Rohit Sharma
    b: Kl Rahul
    c: Virat Kohli  `,
    answer: 'c'
  },
  {
   question: `Which country ranks first in Test match format  ? 
   a: India
   b: Australia
   c: England  `,
    answer: 'b'
  },
  {
    question: `Which team won title of IPL 2020 ? 
    a: Delhi Daredevils
    b: Mumbai Indians
    c: Kings XI Punjab  `,
    answer: 'b'
  },
  {
    question: `Who scored maximum runs in IPL 2020 ? 
    a: Kl Rahul
    b: David Warner
    c: Shreyas Iyer  `,
    answer: 'a'
  },
  {
    question: `Who took maximum wickets in IPL 2020 ? 
    a: Jasprit Bumrah
    b: Trent Boult
    c: Kagiso Rabada  `,
    answer: 'c'
  }  
];

for(var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
};

console.log(chalk.bold.grey("******************"));
if(score>highScore){
  console.log(chalk.bold.bgRgb(37, 154, 156)("You have Scored "+score+'\n'+"Congratulations You Have Set A New HighScore Please Send A Screenshot to Me on my social accounts"));
}
else{
console.log(chalk.bgRgb(227, 50, 34)("Unfortunately! you were unable to beat the High Score.."));
console.log(chalk.bgRgb(
97, 49, 168)("current High score is "+highscore));
};
console.log(chalk.bold.grey("******************"));
console.log(chalk.bold("Thanks for participating"));
