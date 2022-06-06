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

// var apiKey = 'OKx141pMJXLlcnHxgfs3WsoGod6GWuz2ZRafceTeDjHPsnWLq0'
// var apiSecret = 'Pi76yQR0TVo10zUX7kgY4aQV4WZ2IcAggPwlssg7'
// // var submitButton = document.getElementById('submit');
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('getToken').addEventListener('click', sendRequest);
//     sessionStorage.setItem("token", 
//     JSON.stringify(value));
// });

// let sendRequest = (ev) => {
//     var api_url = 'https://api.petfinder.com/v2/oauth2/token';

//     let header = new Headers();
//     header.append( 'Authentication', 'Bearer ${sessionStorage.getItem("token")}' )

//     let request = new Request(api_url {
//         type: 'GET',
//         headers: header
//     });

// fetch(request)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data[0]);
//     })
//     .catch(err => {
//         console.error(err.message);
//     })
// }

// var temperament = ''
// var cost = ''
// var size = ''
// var allergies = ''
// var submit = ''

// var radiocontainer = document.getElementById('radiocontainer')
// radiocontainer.addEventListener('click', function(e){
//     console.log(e.target.value)
//     size = e.target.value
// })
// var radio2container = document.getElementById('radio2container')
// radio2container.addEventListener('click', function(e){
//     console.log(e.target.value)
//     temperament = e.target.value
// }) 

// var submitbutton = document.getElementById('submitbutton')
// submitbutton.addEventListener('click', function (someEventHere) {
//     form.elements ['temperament', 'cost', 'size', 'allergies']
    
// })

// function gettingInfoFromAllergies() {
//     let allergies = document.getElementById('allergies');
//     let allergiesValue = allergies.options[allergies.selectedIndex].value;
//     console.log(allergiesValue);
//     return allergiesValue
// }

// function gettingInfoFromCost () {
//     let cost = document.getElementById('cost');
//     let costValue = cost.options[cost.selectedIndex].value;
//     console.log(costValue);
//     return costValue
// }

// These are the functions to request the token, store it, apply it and request a new one when it times out
// if I can figure out why it won't talk to petfinder. 

var apiKey = 'OKx141pMJXLlcnHxgfs3WsoGod6GWuz2ZRafceTeDjHPsnWLq0'
var apiSecret = 'Pi76yQR0TVo10zUX7kgY4aQV4WZ2IcAggPwlssg7'
var token = ''
var data = ''
var submitButton = document.getElementById('#submit');
console.log('made it this far')
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getToken').addEventListener('click', sendRequest());
    sessionStorage.setItem("token", data)
});

var sendRequest = function() {
   return fetch('https://api.petfinder.com/v2/oauth2/token', {
       method: 'POST',
       body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + apiSecret,
    //    headers: {
    //        'Content-Type' : 'application/x-www-form-urlencoded'
    //    }
   }).then(function(resp) {
       return resp.json();

   }).then(function(data) {
    console.log('token', data)
       token = data.access_token;
       tokenType = data.token_type;
       expires = new Date().getTime() + (data.expires_in * 1000);
   }).catch(function (err) {
       console.log('errors', err);
   });
};

// var renewToken = () => {
//     if (!expires || expires - new Date().getTime() <1) {
//         sendRequest().then(function() {

//         });
//     }
// };
// var getDogs = function() {
//     return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
//         method: 'GET',
//         headers: {
//             'Authorization' : 'Bearer' +  token,
//             'Content-Type' : 'application/x-www-form-urlencoded'
//         }
//     }).then(function (resp) {
//         return resp.json();
        
//     }).then(function (data) {
//         console.log('dogs', data);
//     }).catch(function(err) {
//         console.log('errors', err);
//     });
// };
// var makeCall = function () {
//     if (!expires || expires - new Date().getTime() <1) {
//         console.log('new call');
//         sendRequest().then(function() {
//             getDogs();
//         });
//         return;
//     } 
//     console.log('from cache');
//     getDogs();
// }
