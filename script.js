console.log('>> script-ran <<')

//global Var
let isGameStart = false;
const dictArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]
let currentScore = 0;
let totalScore = 0;

//DOM selector
let wordDisplay = document.querySelector('.word-display');
let inputBox = document.querySelector('.input-box');
let currentScoreDisplay = document.querySelector('.current-score')
let buttonInit = document.querySelector('.btn-init')

//Function

//FN-Generate random word
const genRandWord = () => {
    let rand = Math.floor(Math.random()*dictArray.length);
    let randWord = dictArray[rand];

    // console.log(randWord);
    wordDisplay.textContent = randWord;

}

const logInput = () =>{
    console.log(inputBox.value);
    console.log(wordDisplay.textContent)
}



const clearInputBox = () =>{
    inputBox.value = "";
}


//FN-to check if word match

const checkInputMatch = () =>{
    console.log(inputBox.value);
    console.log(wordDisplay.textContent);
    if(inputBox.value === wordDisplay.textContent){
        currentScore++
    }
    currentScoreDisplay.textContent = currentScore;
    console.log(currentScore);
    console.log(currentScoreDisplay);
}



//FN-Timer
// let time = 5;
// //Functions
// let stopwatch = setInterval(() => {
//     if(time > 0){
//         time--
//     }
// }, 1000);



//Event Listener

//e.keyCode 32 is for spacebar - will create space and mess with scoring
//enter just put e.key === "Enter"
// inputBox.addEventListener('keypress', function(e){
//     if(e.key == "Enter"){
//         // logInput();
//         checkInputMatch();
//         clearInputBox();
//     }
// })


inputBox.addEventListener('change', function(){
    // if(e.key == "Enter"){
        // logInput();
        checkInputMatch();
        clearInputBox();
    // }
})

buttonInit.addEventListener('click', function(){
    genRandWord();
    // console.log('clicked');
})