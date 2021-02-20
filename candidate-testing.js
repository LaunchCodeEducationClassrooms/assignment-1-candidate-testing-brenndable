const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 

let candidateName= "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question
let correctAnswer
let candidateAnswer = ""
let questions =
[ "Who was the first American woman in space? " , // 0
"True or false: 5000 meters = 5 kilometers. " ,  // 1
"(5 + 3)/2 * 10 = ? " , // 2
"Given the array [8, Orbit, Trajectory, 45] what entry is at index 2? " , // 3
"What is the minimum crew size for the ISS? "] //4 
let correctAnswers = 
[ "Sally Ride",  // 0
"True", // 1
"40", // 2
"Trajectory", // 3
"3" ] // 4
let candidateAnswers = []



// TODO 1.1b: Ask for candidate's name //

let candiateName = input.question("Enter name : ")
 function askForName () {
   }

askForName()

let message = (`Welcome, ${candiateName} :) \nPlease answer the following questions: \n `)
function printMessage() {
   console.log(message)
}

printMessage()


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let answersTwo = 0
for (i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i])

  console.log(`Your answer : ${candidateAnswers[i]}`)
  console.log(`Correct answer : ${correctAnswers[i]}\n`)
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;
  let correctNum = 0

  for (let i = 0; i < questions.length; i++) {
    let canAns = candidateAnswers[i].toLowerCase();
    let correctAns = correctAnswers[i].toLowerCase();

    
    if (canAns === correctAns)
    {
      correctNum++
      }

  }
   

  grade = (correctNum / questions.length) * 100
  
  console.log( `>>> Overall Grade: ${grade}% (${correctNum} out of ${questions.length}) <<<`)


  if (grade >= 80) {
    console.log(">>> Status : PASSED <<<") 
  } else {
    console.log(">>> Status : FAILED <<<")
  }

  return grade;
 } 


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}; 