var btnTranslate = document.querySelector(".button");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server!!! Please try again after some time!!")
}

function clickHandler(){
    var inputText = txtInput.value; // take input 


// calling  server to process the input url
 fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
})
 .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)