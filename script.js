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

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    // show the questions
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
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "What Size Dog Are We Looking For Here",
		answers: {
			a: 'Small',
			b: 'Medium',
			c: 'Large',
            d: 'Enormous, like a horse'
		},
		correctAnswer: 'c'
	},
	{
		question: "You Got Them Allergies?",
		answers: {
			a: 'Yup',
			b: 'Nope',
		},
		correctAnswer: 'b'
	},
    {
		question: "What About Temperament?",
		answers: {
			a: 'Calm',
			b: 'Protective',
            c: 'Energetic',
            d: 'Timid'
		},
		correctAnswer: 'c'
	},
    {
		question: "Got Money To Burn?",
		answers: {
			a: 'Of Course Not',
			b: 'Rich AF',
            c: 'Love Matters More Than Money'
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

var 