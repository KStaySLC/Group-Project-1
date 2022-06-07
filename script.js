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

let token;
let token_type;
let expires;
// let userChoice = {}

let getTokenBtn = document.getElementById('submitbutton');
getTokenBtn.addEventListener('click', sendRequest);

function sendRequest () {
    let apiKey = 'OKx141pMJXLlcnHxgfs3WsoGod6GWuz2ZRafceTeDjHPsnWLq0'
    let apiSecret = 'Pi76yQR0TVo10zUX7kgY4aQV4WZ2IcAggPwlssg7'

   fetch('https://api.petfinder.com/v2/oauth2/token', { 
       method: 'POST',
       body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + apiSecret,
       headers: {
           'Content-Type' : 'application/x-www-form-urlencoded'
       } 
    
   }).then(function(resp) {
       
       return resp.json();

   }).then(function(data) {
    console.log('token', data)
       token = data.access_token;
       token_type = data.token_type;
       expires = new Date().getTime() + (data.expires_in * 1000);
       getDogs(token, token_type)
   }).catch(function (err) {
       console.log('errors', err);
   });
};

var renewToken = () => {
    if (!expires || expires - new Date().getTime() <1) {
        sendRequest().then(function() {

        });
    }
};

var makeCall = function () {
    if (!expires || expires - new Date().getTime() <1) {
        console.log('new call');
        sendRequest().then(function() {
            getDogs();
        });
        return;
    } 

// Our problem exists below here
    console.log('from cache');
    getDogs();
}
// var parameters  = ''
function getDogs(token, token_type) {
    fetch('https://api.petfinder.com/v2/animals?type=dog&size=' + size + '&good_with_children=true&page=2', { 
        method: 'GET',
        headers: {
            'Authorization' : `${token_type} ${token}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
        
    }).then(function (resp) {
        console.log('response', resp)
        return resp.json();
        
    }).then(function (data) {
        console.log('dogs', data);
    }).catch(function(err) {
        console.log('errors', err);
    });
};



let dog = {} 
let size = [];
var radiocontainer = document.getElementById('radiocontainer')
radiocontainer.addEventListener('click', function(e){
    console.log(e.target.value)
    if (this.checked){
        size = e.target.value
        console.log(size)
    }
    
    // dog['Size'] = size
    // alert('dog')
    return size
    
})

var radio2container = document.getElementById('radio2container')
radio2container.addEventListener('click', function(e){
    console.log(e.target.value)
    temperament = e.target.value
    dog['Temperament'] = temperament
    // console.log('temperament')
    return dog
}) 
function gettingInfoFromAllergies() {
    let allergies = document.getElementById('allergies');
    let allergiesValue = allergies.options[allergies.selectedIndex].value;
    console.log(allergiesValue);
    return allergiesValue
}
function gettingInfoFromCost () {
    let cost = document.getElementById('cost');
    let costValue = cost.options[cost.selectedIndex].value;
    console.log(costValue);
    return costValue
}
// gettingInfoFromCost()
// let submitButton = document.getElementById('submitbutton')
// getTokenBtn.addEventListener('click', collectedValues)


function collectedValues() {
    
    console.log('dog', dog)
    
}
