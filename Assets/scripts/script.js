var quizIntro = document.querySelector(".quiz-intro");


var startButton = document.querySelector("#get-started");

const question1 = {
    "What does DOM stand for?": [
        "Don't Over Motivate",
        "Document Object Management",
        "Document Object Model",
        ""
    ]
}






const questionArray = [];


const startQuiz = () => {

}


const hideElements = () => {
    quizIntro.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
}



startButton.addEventListener('click', hideElements)