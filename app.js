var button = document.querySelector(".button");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("An error occured!!", error);
    alert("Something went wrong with the server!! Please try again after some time...")
}

function clickHandler(){
    var txtInput = txtInput.value; // take input 


// calling  server to process the input url
 fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
})
 .catch(errorHandler)
};

button.addEventListener("click", clickHandler)