var quizIntro = document.querySelector(".quiz-intro");


var startButton = document.querySelector("#get-started");

const question1 = {
    "What does DOM stand for?": [
        "Don't Over Motivate",
        "Document Object Management",
        "Document Object Model",
        "Device Override Mode"
    ],
    "Answer": "Document Object Model"
}





// Add more questions later
const questionArray = [question1];




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

        for( let j = 0; j < selection.length; j++) {
            const buttonAnswers = document.createElement('button');
            buttonAnswers.setAttribute('text', selection[j]);
            buttonAnswers.innerHTML = selection[j];

            buttonAnswers.addEventListener('click', () => {
                console.log(buttonAnswers.innerHTML);
            })

            questionList.appendChild(buttonAnswers);
        }


    }
}


const hideElements = () => {
    quizIntro.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    startQuiz();


}



startButton.addEventListener('click', hideElements)


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


// Biggest issue: how do I populate HTML with JS repeatedly?