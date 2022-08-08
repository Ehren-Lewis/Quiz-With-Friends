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

let globalCount = 0;
let globalScore = 0;

// right answer will give 10 points 


// Add more questions later
const questionArray = [question1, question2];

const maxCount = questionArray.length;

const postQuizScreen = (score) => {
    console.log(score);
}


const setTimer = (time) => {
    // startQuiz();
    newQuiz(questionArray, globalCount);

    var timerElement = setInterval( () => {

        time--;

        timer.innerHTML = time;


        if (time == 0) {
            clearInterval(timerElement);
            postQuizScreen(globalScore);
            const box = document.querySelector(".question-container");
            box.setAttribute("style", "display: none");
        }

    }, 1000);
}

const questionButtonHandler = (targetButton, answer, questionList) => {
    if (targetButton.innerHTML == answer) {
        globalScore += 10;
        console.log(globalScore);
    }
    while (questionList.children.length > 0) {
        questionList.removeChild(questionList.firstChild);
    }

    globalCount++;
    newQuiz(questionArray, globalCount);
}

// const startQuiz = (questioneEle, AnswerEle) => {
//     const questionBox = document.querySelector(".question-container");
//     questionBox.setAttribute("style", "display: block");
//     for (let quizItem of questionArray) {
//         // The actualy question for each question
//         const question = Object.keys(quizItem)[0];
//         const answer = Object.entries(quizItem)[1][1];
//         console.log(answer);
//         //  This is an array.
//         const selection = Object.entries(quizItem)[0][1];

//         document.querySelector(".question-title").innerHTML = question;

//         const questionList = document.querySelector(".question-list");
//         console.log(questionList);

//         const answerButtonsList = [];

//         for( let j = 0; j < selection.length; j++) {
//             const buttonAnswers = document.createElement('button');
//             buttonAnswers.setAttribute('text', selection[j]);
//             buttonAnswers.innerHTML = selection[j];
//             answerButtonsList.push(buttonAnswers);
//         }


//         for (let i = 0; i < answerButtonsList.length; i ++) {
//             answerButtonsList[i].addEventListener('click', () => {
//                 questionButtonHandler(answerButtonsList[i], answer);
//             });
//             questionList.appendChild(answerButtonsList[i]);
//         }
//     }
// }

const newQuiz  = (questions, count) => {

    const questionBox = document.querySelector(".question-container");
    questionBox.setAttribute("style", "display: block");
    if (count == maxCount) {
        console.log('done');
        // questionBox.setAttribute("style", "display: none");
        // return;
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
    setTimer(time);
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

