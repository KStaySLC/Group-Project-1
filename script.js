function hidePage(){
    for (let i = 0; i < pageArray.length; i++) {
        if(!pageArray[i].classList.contains('hide')){
            pageArray[i].classList.add('hide');
        }
    }
}
yes1.addEventListener('click', hideButton);
function hideButton() {
    demo.remove();
    demo1.remove();
}

var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerBtnElement = document.getElementById("answer-btns");
var answerText = document.getElementById("answer-text");
var counterText = document.getElementById("counter-text");
var counter = 75;
var id;
var shuffleQuestions = [];
var currentQuestionIndex = 0;
var score =0;
var gameIsOver = document.getElementById("game-over");
var nameScore = document.getElementById('name-score');
var lastScore = document.getElementById('last-score');
var storedScore = document.getElementById('stored-score');

lastScore.innerText = showScore();
startBtn.addEventListener('click', beginQuiz)
nameScore.addEventListener('keypress', function (e) {    
    if (e.key === 'Enter') {        
    saveScore()        
    lastScore.innerText = showScore();        
    nameScore.value = "";    
}})
function beginQuiz() {   
    startBtn.classList.add('hide');   
    questionContainer.classList.remove('hide');   
    shuffleQuestions = questions.sort(() => Math.random() - .5);   
    setElementInnerText(counterText, counter);   
    id = setInterval(() => {       
        decrement();   
    }, 1000);   
    showNextQuestion();
}
function decrement() {    
    counter--;    
    var quit = counter <= 0;    
    setElementInnerText(counterText, quit ? 0 : counter);    
    if (quit) {        
        clearInterval(id);        
        gameOver();    
    }
}    
    function showNextQuestion() {    
        showQuestion(shuffleQuestions[currentQuestionIndex]);
    }
function showQuestion(question) {    
    questionElement.innerText = question.question;    
    showOptions(question.answers);
}
function showOptions(answers) {    
    for (var i = 0; i < answers.length; i++) {        
        var btn = document.getElementById('btn' + (i+1));        
        btn.innerText = answers[i].text;    
    }
}
function isCorrect(index) {    
    var isCorrect = shuffleQuestions[currentQuestionIndex].answers[index].correct;    
    answerText.classList.remove('hide');    
    setElementInnerText(answerText, isCorrect ? 'Correct!' : 'Wrong!');    
    if (!isCorrect) {        
        counter -= 10;        
        if (counter < 0) {            
            counter = 0;        
        }        
        setElementInnerText(counterText, counter);    
    } else {        
        score++;    
    }
    setTimeout(() => {        
        answerText.className = 'hide';    
    }, 3000);    
    currentQuestionIndex++;    
    if (currentQuestionIndex >= shuffleQuestions.length) {        
        gameOver();    
    } else {        
        showNextQuestion();    
    }
}
function setElementInnerText(element, text) {    
    element.innerText = text;}
function gameOver() {    
    startBtn.classList.add('hide');   
    questionContainer.classList.add('hide');   
    gameIsOver.classList.remove('hide');   
    var p1 = document.getElementById("p1");   
    setElementInnerText(p1, "You scored: " + score + "/5")   
    clearInterval(id);   
    counterText.classList.add('hide');
}
function saveScore() {    
    var previousScore = nameScore.value;    
    localStorage.setItem("name-score", previousScore);
}
function showScore() {    
    var scoreShowed = localStorage.getItem("name-score");    
    return scoreShowed;}