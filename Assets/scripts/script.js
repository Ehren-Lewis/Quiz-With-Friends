var quizIntro = document.querySelector(".quiz-intro");
var startButton = document.querySelector("#get-started");

var timer = document.getElementById("time");
time = timer.innerHTML;
const question1 = { 
    "What does DOM stand for?": [
        "Don't Over Motivate",
        "Document Object Management",
        "Document Object Model",
        "Device Override Mode"
    ],
    "Answer": "Document Object Model"
}

const question2 = {
    "What does HTML stand for?": [
        "HyperText Markdown Language",
        "High Text Markup Logs",
        "HyperText Markup Language",
        "HyperText Markdown Logs"
    ],
    "Answer": "HyperText Markup Language"
}

const question3 = {
    "What is the first index of an array?": [
        "0",
        "1",
        "start",
        "first"
    ],
    "Answer": "0"
}

const question4 = {
    "What type of programming language is JavaScipt?": [
        "Functional",
        "Data-Oriented",
        "Machine",
        "Procedural"
    ],
    "Answer":"Procedural"
}

const question5 = {
    "What does CSS stand for?": [
        "Cascading Style Sheets",
        "Corresponding Style Sheets",
        "Cascading Source Sheets",
        "Corresponding Source Sheets"
    ],
    "Answer": "Cascading Style Sheets"
}

const question6 = {
    "What are the ways to define variables in JavaScript?": [
        "Var Def Make",
        "Def Make Set",
        "Var Let Const",
        "Let Make Def"
    ],
    "Answer":"Var Let Const"
}

const question7 = {

}


let globalCount = 0;
let globalScore = 0;

// right answer will give 10 points     


// Add more questions later
const questionArray = [question1, question2, question3,
     question4, question5, question6];

const maxCount = questionArray.length;
const maxScore = maxCount * 10;

const submitFinalScore = (e) => {
    e.preventDefault();
    const nameSubmit = document.querySelector("#initials");
    const submitObject = {"intitials": nameSubmit.value, "score": globalScore};
    // console.log(nameSubmit.textContent);
    // console.log(typeof nameSubmit.textContent);
    localStorage.setItem(nameSubmit.value, globalScore);

}


// Could use this
const postQuizScreen = () => {
    const completion = document.querySelector(".completion-container");
    completion.setAttribute("style", "display: block");
    const completionDescr = document.querySelector(".completion-descr");
    completionDescr.textContent = `You Scored ${globalScore} points`;
    const scoreInput = document.querySelector("#score");
    console.log(scoreInput)
    scoreInput.value = globalScore;

    const submitButton = document.querySelector("#complete-submit");
    submitButton.addEventListener('click', submitFinalScore);
}

let globalTime = 20;


const setTimer = () => {
    newQuiz(questionArray, globalCount);

    const box = document.querySelector(".question-container");

    var timerElement = setInterval( () => {

        globalTime--;

        timer.textContent = globalTime;


        if (globalTime <= 0 || box.style.display == "none") {
            clearInterval(timerElement);
            box.setAttribute("style", "display: none");
            postQuizScreen(globalScore);
            timer.textContent = 0;
            



        }

    }, 1000);
}

const questionButtonHandler = (targetButton, answer, questionList) => {
    if (targetButton.innerHTML == answer) {
        globalScore += 10;
    }
    else {
        globalTime -= 5;
    }
    while (questionList.children.length > 0) {
        questionList.removeChild(questionList.firstChild);
    }

    globalCount++;
    newQuiz(questionArray, globalCount);
}


const newQuiz  = (questions, count) => {

    const questionBox = document.querySelector(".question-container");
    questionBox.setAttribute("style", "display: block");
    if (count == maxCount) {
        questionBox.setAttribute("style", "display: none");
        postQuizScreen();
        return;
    }
    const currentQuestion = Object.entries(questions[count])[0][0];
    const currentResponses = Object.entries(questions[count])[0][1];
    const answer = Object.entries(questions[count])[1][1];

    const questionEle = document.querySelector(".question-title");
    questionEle.textContent = currentQuestion;

    const questionList = document.querySelector(".question-list");
    for (let i = 0; i < currentResponses.length; i++) {
            const buttonAnswers = document.createElement('button');
            buttonAnswers.textContent = currentResponses[i];
            buttonAnswers.addEventListener('click', () => {
                questionButtonHandler(buttonAnswers, answer, questionList);
            });
            questionList.appendChild(buttonAnswers);
    }

    const questionNodes = questionList.childNodes;
}


const hideElements = () => {
    quizIntro.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    setTimer(globalTime);
}

startButton.addEventListener('click', hideElements);

// Test psuedo code
// Have there be a question container with display none
// with each questions, change display to next

// Each question will be a button wrapped in a list
// On click, check the value of the button 
// if that value == question answer, they get more points

// timeout function
// what to do when timeout function hits 0? 
// Have another CredentialsContainer, display none 
// maybe a bool variable. If player is done with quiz 
// Then change to true then display based on that 

