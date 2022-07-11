

var myH1 = document.querySelector('#pageTitle')
var myButton = document.getElementById('startQuiz')
var scores = document.getElementById('scores')
var myTimer;
myButton.addEventListener('click', function() {

    var count = 100
    myH1.textContent = count
    startGame()
    scores.classList.remove('hide')
    myTimer = setInterval(function(){
        count--
        myH1.textContent = count
        if (count === 0) {
            clearInterval(myTimer)
            myH1.textContent = 'Quiz ended'
        }
    }, 1000)
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
    score = 0
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
        }
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
                score++
                console.log(score)
            }else{
                console.log('wrong answer')
            }
            currentQuestionIndex++
            if (currentQuestionIndex < myQuestions.length) {
                showQuiz(currentQuestionIndex);
            }   else {
                endQuiz();
                }
            }
        }
    )

    function endQuiz(){
        console.log(myTimer)
        clearInterval(myTimer)
        var scores = document.getElementById('scores')
        scores.textContent = "You scored " + score + "/5, congrats!"
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        
    }

    function showScore() {
        score.classList.remove('hide')
    }
