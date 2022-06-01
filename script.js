function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];

            for(letter in questions[i].answers) {
                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
    	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

}

showQuestions(questions, quizContainer);

submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
}
}

var myQuestions = [
    {
        question: "What Size Dog Are We Looking For Here?",
        answers: {
            a: 'small',
            b: 'medium',
            c: 'large',
            d: 'enormous....like almost a horse'
        },
    },
    {
        question: "You Got Them Allergies? Don't Want A Shedding Dog?",
        answers: {
            a: 'yup',
            b: 'nope',
        },
    },
    {
        question: "What About Temperament?",
        answers: {
            a: 'calm',
            b: 'protective',
            c: 'energetic',
            d: 'social'
        },
    },
    {
        question: "Got Money To Burn?",
        answers: {
            a: 'of course not',
            b: 'rich af',
            c: 'cant put a price on love',
        }
    }
]}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);