var timer = document.getElementById('header1');
var sec = 45;
var timerID = setInterval(1000);
function countDownTimer() {
    if (sec == -1) {
        clearTimeout(timerID);
        // “DO Something this is where the question switches”
    } else {
        timer.innerHTML = sec + " seconds remaining!";
        sec--;
    }
}
var startButton = document.getElementById("start");
startButton.addEventListener("click", startTimer, countDownTimer);
var questionsBox = document.getElementById("question-container");
var questionRandom =
function startTimer(quiz) {
    startButton.classList.add("hide");
    questionRandom = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    questionsBox.classList.remove("hide");
    nextQuestion();
}

var germanShepard = {
    size: 
    temperment
    price
    hypoallergenic
}

var labrador = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var aussieDoodle = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var samoyed = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var terrier = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var shihTzu = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var aussieShepard = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var borderCollie = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var bichonFrise = [
    size: 
    temperment:
    price:
    hypoallergenic:
]

var toyPoodle = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var maltese = {
    size: 
    temperment:
    price:
    hypoallergenic:
}

var pomeranian = {
    size: 
    temperment:
    price:
    hypoallergenic:
}