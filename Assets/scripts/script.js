
// Mass question definition
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
    "How do you print to the console in JavaScript?": [
        "console.log(message)",
        "print(message)",
        "std.cout << message",
        "echo << message "

    ],
    "Answer": "console.log(message)"
}

const question8 = {
    "How do you get items from local storage?": [
        "document.getItem(value)",
        "localStorage.setItem(key)",
        "location.getItem(key)",
        "localStorage.getItem(key)"

    ],
    "Answer": "localStorage.getItem(key)"
}

const question9 = {
    "How do you add events to elements?": [
        "element.AddEventListener(event, function)",
        "document.AddEventListener(event, function)",
        "element.criteria(response, function)",
        "document.criteria(response, function)"
    ],
    "Answer": "element.AddEventListener(event, function)"
}

const question10 = {
    "what does '==' mean in comparison?": [
        "Checks values and data types",
        "Sets the left value equal to the right",
        "Check values but not data types",
        "Sets the right value equal to the left"

    ],
    "Answer": "Check values but not data types"
}
let globalCount = 0;
let globalScore = 0;
let globalTime = 60;

const questionArray = [question1, question2, question3,
    question4, question5, question6, question7,
    question8, question9, question10];

const maxCount = questionArray.length;
const maxScore = maxCount * 10;

const returnButton = document.querySelector("#home");
returnButton.addEventListener('click',  () => {
    location.reload();
});

// Only show scores when you submit
const showScores = (e) => {
    if (e.target.textContent == "Submit") {
    const completions = document.querySelector(".completion-container");
    completions.setAttribute("style", "display: none");
    }

    const finalScores = document.querySelector(".finals-hider");
    finalScores.setAttribute("style", "display: block");

    const scores = JSON.parse(localStorage.getItem('scores'));

// Author: @_saurabh_jaiswal
// Date accessed: 8/10/2022
// title: Bubble Sort Algorithms by Using JavaScript
// type: source code
// Link: https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
// version: ES6
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores.length - i - 1; j++) {
            if (scores[j].score < scores[j +1 ].score) {
                var temp = scores[j];
                scores[j] = scores[j + 1];
                scores[j + 1] = temp;
            }
        }
    }

    const table = document.querySelector("#score-table");

    for (let i = 0; i < scores.length; i++ ) {

        const currentObject = scores[i];
        const newRow = table.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        const cell1Text = document.createTextNode(Object.values(currentObject)[0]);
        cell1.appendChild(cell1Text);

        const cell2 = newRow.insertCell(1);
        const cell2Text = document.createTextNode(Object.values(currentObject)[1]);
        cell2.appendChild(cell2Text);
    }
}

// Sets and gets locaal storage
const submitFinalScore = (e) => {
    e.preventDefault();
    const nameSubmit = document.querySelector("#initials");
    if (nameSubmit.value == '') {
        return;
    }
    const submitObject = {"intitials": nameSubmit.value, "score": globalScore};
    const allScores = localStorage.getItem('scores');

    let allScoresMid = JSON.parse(allScores);   
    let appendArray =  [];

    if (allScoresMid != null) {
        appendArray = allScoresMid;
    }

    appendArray.push(submitObject);

    localStorage.setItem('scores', JSON.stringify(appendArray));
    showScores(e);
}


// Shows immediately after the quiz is completed
const postQuizScreen = () => {

    const completion = document.querySelector(".completion-container");
    completion.setAttribute("style", "display: block");

    const completionDescr = document.querySelector(".completion-descr");
    completionDescr.textContent = `You Scored ${globalScore} out of ${maxCount * 10} points`;

    const scoreInput = document.querySelector("#score");
    scoreInput.value = globalScore;

    const submitButton = document.querySelector("#complete-submit");
    submitButton.addEventListener('click', submitFinalScore);
}


// First function that is called when the quiz starts
const setTimer = () => {
    // cannot access the scores in the middle of the quic
    scoresButton.removeEventListener('click', hideElements);

    newQuiz(questionArray, globalCount);
    globalTime = 60;

    document.querySelector("#time").textContent = 60;

    var timer = document.getElementById("time");
    const box = document.querySelector(".question-container");

    var timerElement = setInterval( () => {

        globalTime--;
        timer.textContent = globalTime;

        // Checks if the boz is none, hence the quiz is over
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


// This quix
const newQuiz  = (questions, count) => {

    const questionBox = document.querySelector(".question-container");
    questionBox.setAttribute("style", "display: block");
    if (count == maxCount) {
        questionBox.setAttribute("style", "display: none");
        postQuizScreen();
        count = 0; 
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
}

var scoresButton = document.querySelector("#get-scores");
var startButton = document.querySelector("#get-started");

const hideElements = (e) => {    
    var quizIntro = document.querySelector(".quiz-intro");
    quizIntro.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    if (e.target.textContent == "Get Started!") {
    setTimer();
    }
    else if ( e.target.textContent == "Scores") {
    showScores(e);
    }
}

// These have the same function call, but depending on which
// event triggered it, will either show the quiz or take one to the scores
startButton.addEventListener('click', hideElements);
scoresButton.addEventListener('click', hideElements);

