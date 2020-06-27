console.log('>> script-ran <<')


//-------------------GLOBAL VARIABLES--------------------------
let isGameStart = false;
const dictArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]
const usedArray = [];
let currentScore = 0;
let totalScore = 0;
let currentWord = "";
let totalSecs = 5;
let startInterval;



//-------------------DOM SELECTORS----------------------------
let wordDisplay = document.querySelector('.word-display');
let inputBox = document.querySelector('.input-box');
let currentScoreDisplay = document.querySelector('.current-score')
let buttonInit = document.querySelector('.btn-init')
let nameDisplay = document.querySelector('.player-name');

//-------------------FUNCTIONS----------------------------

//GET PLAYER NAME OR DISPLAY GAME OVER
// const getPlayerName = () => {
//     let getName = prompt(`hi what's your name?`)
//     nameDisplay.textContent = getName;
// }


//BUTTON DISABLED WHEN GAME IN PROGRESS
// const gameStartedBtn = () => {
//     buttonInit.style.backgroundColor = "darkgrey";
//     buttonInit.style.color = "grey";
// }





//FN-Generate random word
const generateWord = () => {
    let rand = Math.floor(Math.random()*dictArray.length);
    let randWord = dictArray[rand];
    dictArray.splice(rand,1);
    usedArray.push(randWord);
 
    wordDisplay.textContent = randWord;
    currentWord = randWord;
}

//testing fn
// const logInput = () =>{
//     console.log(inputBox.value);
//     console.log(wordDisplay.textContent)
// }


const clearInputBox = () =>{
    inputBox.value = "";
}


//FN-to check if word match & update current score
const checkInputMatch = () =>{
    console.log('> ', inputBox.value);
    console.log('>> ', wordDisplay.textContent);
    console.log('>>> ', currentWord);
    if(inputBox.value === wordDisplay.textContent){
        currentScore++
        console.log('did this work')
    }
    currentScoreDisplay.textContent = currentScore;
    console.log(currentScore);
    console.log(currentScoreDisplay);
}



//FN TO DECREMENT SECONDS
const countdown = () =>{
    if(totalSecs > 0){
        console.log(totalSecs);
        totalSecs--;
    } else {
        console.log(totalSecs)
        clearInterval(startInterval)
    }
}

//FN TO START COUNTDOWN
// startInterval = setInterval(countdown, 1000);




//ANIMATION FOR WRONG WORD INPUT
wordDisplay.addEventListener('click', function() {
            wordDisplay.classList.add('animate__animated','animate__shakeX')
            console.log(wordDisplay)
            setTimeout(clearWordDisplayAnim, 1000);
});

const clearWordDisplayAnim = () =>{
    wordDisplay.classList.remove('animate__animated','animate__shakeX')
    console.log(wordDisplay)
}



//---------------------EVENT LISTENERS----------------------------
//enter works for 'change' listener
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
        generateWord();
        console.log('changed')
    // }
})

buttonInit.addEventListener('click', function(){
    // console.log('clicked');
    isGameStart =  true;
    generateWord();
    // gameStartedBtn();
})

