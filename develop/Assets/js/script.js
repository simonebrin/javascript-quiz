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

// var myH1 = document.querySelector('#pageTitle')
// var myButton = document.getElementById('startQuiz')

// myButton.addEventListener('click', function() {

//     var count = 10
//     myH1.textContent = count
//     var myTimer = setInterval(function(){
//         count--
//         myH1.textContent = count
//         if (count === 0) {
//             clearInterval(myTimer)
//             myH1.textContent = 'Quiz ended'
//         }
//     }, 500)
//     })






    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    var startQuizButton = document.getElementById('startQuiz')
    var myQuestions = [ 
        {
            question: "something about javascript?",
            answers: {
                a: "answer1",
                b: "answer2",
                c: "answer3"
            },
            correctAnswer: "b"
        },
        {
            question: "something else about javascript?",
            answers: {
                a: "answer1",
                b: "answer2",
                c: "answer3"
            },
            correctAnswer: "c"
        },
        {
            question: "something else else about javascript?",
            answers: {
                a: "answer1",
                b: "answer2",
                c: "answer3"
            },
            correctAnswer: "a"
        }
    ];



// Pagination
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;



// Event listeners
startQuizButton.addEventListener('click', startQuiz);
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);






   








    // var questions = [
    // var score = 0;
        
    // for(var i=0; i < questions.length; i++){
    //     var response = window.prompt(questions[i].prompt)
    //     if(response == questions[i].answer){
    //         score++;
    //         alert ("Correct!");
    //     }   else {
    //         alert ("Incorrect");
    //     }
    // }
    // alert("you got " + score + "/" + questions.length);
    // {
    //         prompt: "Some question about javascript?\n(a) answer1\n\ (b) answer2\n(c) answer3",
    //         answer; "a"
    //     },
    //     {
    //         prompt: "Some other question about javascript?\n(a) answer1\n\ (b) answer2\n(c) answer3",
    //         answer; "b"
    //     },
    // ]