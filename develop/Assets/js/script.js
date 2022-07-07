// Element.addEventListener(click, startQuiz)

// // function clickHandler(event) {
// //     console.log('Button Clicked');
// //  }

//  function startQuiz(){
//   function clearBox(start){
//     document.getElementById(start).innerHTML = "";
//   }
// }

// startQuiz()
// console.dir(window.document);

// var btn = window.document.querySelector("button");
// console.dir(btn);

// {/* <button class="btn" id="start-quiz">Add Task</button>
// document.querySelector("#start-quiz"); */}

// document.querySelector(".btn");
// document.querySelector("#start-quiz");

// var buttonEl = document.querySelector("#start-quiz");
// console.log(buttonEl);

var myH1 = document.querySelector('#pageTitle')
var myButton = document.getElementById('startQuiz')

myButton.addEventListener('click', function() {

    var count = 10
    myH1.textContent = count
    startGame()
    var myTimer = setInterval(function(){
        count--
        myH1.textContent = count
        if (count === 0) {
            clearInterval(myTimer)
            myH1.textContent = 'Quiz ended'
        }
    }, 500)
})

var questionContainerElement = document.getElementById('question-container')

var currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var startTextElement = document.getElementById('startText')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')


function startGame() {
    console.log("start")
    currentQuestionIndex = 0
    questionElement.classList.remove('hide')
    answerButtonsElement.classList.remove('hide')
    startTextElement.classList.add('hide')
    myButton.classList.add('hide')
    setNextQuestion()
}

    var myQuestions = [ 
        {
            question: "Which one of these is NOT a data type that JavaScript supports?",
            answers: {
                a: "string",
                b: "object",
                c: "letter",
                d: "boolean"

            },
            correctAnswer: "letter"
        },
        {
            question: "In which HTML element do we put JavaScript?",
            answers: {
                a: "<js>",
                b: "<script>",
                c: "<java>",
                d: "<javascript>"
            },
            correctAnswer: "<script>"
        },
        {
            question: 'How do you link an external script called "example.js"?',
            answers: {
                a: '<script name="example.js">',
                b: '<script href="example.js">',
                c: '<script link="example.js">',
                d: '<script src="example.js">'
            },
            correctAnswer: '<script src="example.js">'
        },
        {
            question: 'How do you write "Hello" in an alert box?',
            answers: {
                a: 'alert("Hello")',
                b: 'alertBox("Hello")',
                c: 'warn("Hello")',
                d: 'text("Hello")'
            },
            correctAnswer: 'alert("Hello")'
        },
        {
            question: "How do you create a function in JavaScript?",
            answers: {
                a: "function myName()",
                b: "function = myName",
                c: "function myName[]",
                d: "myName = function"
            },
            correctAnswer: "function myName()"
        },
        {
            question: "What is the length property of an array?",
            answers: {
                a: "The number of lines it takes up",
                b: "The number of characters in it",
                c: "The number of elements in it",
                d: "The distance from start to finish"
            },
            correctAnswer: "The number of elements in it"
        },
    ];
function setNextQuestion() {
    showQuiz(currentQuestionIndex)
}

function showQuiz(i) {
    questionElement.innerText = myQuestions[i].question
    q1.innerText = myQuestions[i].answers.a
    q2.innerText = myQuestions[i].answers.b
    q3.innerText = myQuestions[i].answers.c
    q4.innerText = myQuestions[i].answers.d
}


    answerButtonsElement.addEventListener('click', function(event) {
        var element = event.target
        if (element.matches('.btn')){
            if (element.textContent === myQuestions[currentQuestionIndex].correctAnswer) {
                console.log('great job')
            }else{
                console.log('wrong answer')
            }
            currentQuestionIndex++
            showQuiz(currentQuestionIndex)
        }
    })
// If you are at the last question end the quiz, showing a game over screen taking them to highscore page
// if it was wrong answer, decrease the time




//     var quizContainer = document.getElementById('quiz');
//     var resultsContainer = document.getElementById('results');
//     var submitButton = document.getElementById('submit');
//     var startQuizButton = document.getElementById('startQuiz')
//     var myQuestions = [ 
//         {
//             question: "something about javascript?",
//             answers: {
//                 a: "answer1",
//                 b: "answer2",
//                 c: "answer3"
//             },
//             correctAnswer: "b"
//         },
//         {
//             question: "something else about javascript?",
//             answers: {
//                 a: "answer1",
//                 b: "answer2",
//                 c: "answer3"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "something else else about javascript?",
//             answers: {
//                 a: "answer1",
//                 b: "answer2",
//                 c: "answer3"
//             },
//             correctAnswer: "a"
//         }
//     ];



// // Pagination
// var previousButton = document.getElementById("previous");
// var nextButton = document.getElementById("next");
// var slides = document.querySelectorAll(".slide");
// let currentSlide = 0;



// // Event listeners
// startQuizButton.addEventListener('click', startQuiz);
// // previousButton.addEventListener("click", showPreviousSlide);
// // nextButton.addEventListener("click", showNextSlide);






   




