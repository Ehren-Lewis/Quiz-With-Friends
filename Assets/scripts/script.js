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
    "Answer": "HyperTExt Markup Language"
}

let globalScore = 0;

// right answer will give 10 points 


// Add more questions later
const questionArray = [question1];


const postQuizScreen = (score) => {
    console.log(score);
}


const setTimer = (time) => {
    startQuiz();

    var timerElement = setInterval( () => {

        time--;

        timer.innerHTML = time;


        if (time == 0) {
            clearInterval(timerElement);
            postQuizScreen(globalScore);
            const box = document.querySelector(".question-container");
            box.setAttribute("style", "display: none");
        }

    }, 250)
}






const questionButtonHandler = (targetButton, answer) => {
    if (targetButton.innerHTML == answer) {
        globalScore += 10;
        console.log(globalScore);
    }
}

const startQuiz = (questioneEle, AnswerEle) => {
    const questionBox = document.querySelector(".question-container");
    questionBox.setAttribute("style", "display: block");
    for (let quizItem of questionArray) {
        // The actualy question for each question
        const question = Object.keys(quizItem)[0];
        const answer = Object.entries(quizItem)[1][1];
        console.log(answer);
        //  This is an array.
        const selection = Object.entries(quizItem)[0][1];

        document.querySelector(".question-title").innerHTML = question;

        const questionList = document.querySelector(".question-list");
        console.log(questionList);

        const answerButtonsList = [];

        for( let j = 0; j < selection.length; j++) {
            const buttonAnswers = document.createElement('button');
            buttonAnswers.setAttribute('text', selection[j]);
            buttonAnswers.innerHTML = selection[j];
            answerButtonsList.push(buttonAnswers);
        }


        for (let i = 0; i < answerButtonsList.length; i ++) {
            answerButtonsList[i].addEventListener('click', () => {
                questionButtonHandler(answerButtonsList[i], answer);
            });
            questionList.appendChild(answerButtonsList[i]);

        }
    }
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

