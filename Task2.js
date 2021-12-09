const chalk = require("chalk")
// var color = require("chalk")
var readlineSync=require("readline-sync");
var score = 0;
var userName=readlineSync.question("what is your name? ");
console.log(chalk.blue("welcome " + userName ))

function play(question,answer){
  var userName=readlineSync.question(chalk.green(question));
  if(userName===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong!")
  }
console.log("current score",score);
console.log("*****************")
}
console.log("Let's see ",userName,"how can you know  history")

var questions=[{
  question:"Who among the following ruler was defeated by Seleucus?? ",
  answer:" Chandra Gupta Maurya"
},{
  question:"Who wrote Bande Mataram?? ",
  answer:" Bankimchandra Chatterjee"
},{
  question:"Where did ‘Tebhega’ movement occur in 1946? ",
  answer:"Bengal"
},{
  question:" When was Indian National song sung for the first time?",
  answer:"1896 session of the Indian National Congress"
},{
  question:" When Indian national Anthem was first sung??",
  answer:"December 27, 1911 Calcutta"
},{
  question:"What was the name of Harsha’s Capital?",
  answer:"Kannaauj"
}];
for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("yeah!! your total score is: ",score)