console.log('>> script-ran <<')


//-------------------GLOBAL VARIABLES--------------------------
let isGameStart = false;
const fixedArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"];
let roundArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]
let usedArray = [];
let currentScore = 0;
let totalScore = 0;
let currentWord = "";
let totalSecs = 5;
let startInterval;
let highScore = 0;
let round = 0;

//-------------------DOM SELECTORS----------------------------
let wordDisplay = document.querySelector('.word-display');
let inputBox = document.querySelector('.input-box');
let timerDisplay = document.querySelector('.timer');
let currentScoreDisplay = document.querySelector('.current-score');
let totalScoreDisplay = document.querySelector('.total-score');
let buttonInit = document.querySelector('.btn-init');
let nameDisplay = document.querySelector('.player-name');
let highScoreDisplay = document.querySelector('.highest-score');


//-------------------FUNCTIONS----------------------------

//GET PLAYER NAME OR DISPLAY GAME OVER
// const getPlayerName = () => {
//     let getName = prompt(`hi what's your name?`)
//     nameDisplay.textContent = getName;
// }


//BUTTON DISABLED WHEN GAME IN PROGRESS
const gameInProgress = () => {
    buttonInit.style.backgroundColor = "darkgrey";
    buttonInit.style.color = "grey";
    buttonInit.disabled = true;
    totalScore = 0;
    totalScoreDisplay.textContent = totalScore;
}

const gameToStartBtn = () => {
    buttonInit.textContent = 'Play again'
    buttonInit.style.backgroundColor = "darkgreen";
    buttonInit.style.color = "white";
    buttonInit.disabled = false;
    totalSecs = 5;
}


//FN-Generate random word
const generateWord = () => {
    let rand = Math.floor(Math.random()*roundArray.length);
    let randWord = roundArray[rand];
    roundArray.splice(rand , 1);
    usedArray.push(randWord);
 
    currentWord = randWord;
    wordDisplay.textContent = randWord;
    
}


const clearInputBox = () =>{
    inputBox.value = "";
}


//FN-to check if word match & update current score
const checkInputMatch = () => {
    console.log("CHECK INPUT MATCH GAME START: ", isGameStart)
    console.log('CHECK INPUT MATCH IN-VAL: ', inputBox.value)
    console.log('CHECK INPUT MATCH CURRENT WORD ', currentWord)
    if(isGameStart){
        if(inputBox.value === wordDisplay.textContent){
            currentScore++
            currentScoreDisplay.textContent = currentScore;
            console.log('match');
            clearInputBox();
            generateWord();
            totalSecs = 5;
        } else {
            wordDisplay.classList.add('animate__animated','animate__shakeX')
            setTimeout(clearWordDisplayAnim, 1000);
            console.log('animate else')
        }
    } 
}



//FN-CHECK IF HIGHSCORE HIT
// const isHighScore = () =>{
//     if(totalScore > highScore){
//         highScore = totalScore;
//         highScoreDisplay.textContent = highScore;
//     } else {
//         highScoreDisplay.textContent = highScore;
//     }
// }

//FN TO DECREMENT SECONDS
const countdown = () =>{
    if(totalSecs > 0){
        console.log(totalSecs);
        timerDisplay.textContent = totalSecs;
        totalSecs--;
        console.log('>> Countdown Progress isGameStart', isGameStart)
    } else {
        timerDisplay.textContent = "--";
        clearInterval(startInterval)
        isGameStart = false;
        console.log('$$ Countdown END isGameStart', isGameStart)
        // Swal.fire(
        //     'Game Over!',
        //     `Your score is ${totalScore}!`,
        //     'success'
        //   )


        // totalScore = currentScore;

        //   Swal.fire({
        //     title: `Game Over! Your Score : ${totalScore}`,
        //     width: 600,
        //     padding: '3em',
        //     background: '#fff',
        //     backdrop: `
        //       rgba(100,100,123,0.4)
        //       url("../leoclap.gif")
        //       center top
        //       no-repeat
        //     `
        //   })
        
        // totalScoreDisplay.textContent = totalScore;
        // console.log(totalScore);
        // isHighScore();
        gameToStartBtn();
        wordDisplay.textContent = "-- Word --";
        console.log(usedArray);
        console.log(roundArray.length);
        usedArray = [];
        roundArray = fixedArray;
        clearInputBox();
        inputBox.disabled = true;
        // console.log(highScore);

    }
}


//ANIMATION FOR WRONG WORD INPUT 
const clearWordDisplayAnim = () =>{
    wordDisplay.classList.remove('animate__animated','animate__shakeX')
}



//---------------------EVENT LISTENERS----------------------------



buttonInit.addEventListener('click', function(){
        isGameStart = true;
        inputBox.disabled = false;
        currentScore = 0;
        currentScoreDisplay.textContent = currentScore;

        generateWord();
        if (isGameStart){
            startInterval = setInterval(countdown, 1000);
   
            inputBox.addEventListener('keypress', function(e){
                e.stopImmediatePropagation();
                if(e.key === "Enter"){
                    
                    console.log('----INPUTBOX EVENTLISTENER START---')
                    console.log('Within Change_InputBoxVal ', inputBox.value)
                    console.log('Within_round_', round);
                    checkInputMatch();
            
                    
                    console.log('Within Change_Current Word:', currentWord)
                    console.log('Within Change_isGameStart:', isGameStart)
                    console.log('----INPUTBOX EVENTLISTENER END---')
                
            }});
        
            round++;
            gameInProgress();

        } 
    } 
)








//------------------------NOTES / DUMMIES-------------------------------


//testing fn
// const logInput = () =>{
//     console.log(inputBox.value);
//     console.log(wordDisplay.textContent)
// }

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



//FN TO START COUNTDOWN
// startInterval = setInterval(countdown, 1000);



//ANIMATION FOR WRONG WORD INPUT - currently set to click
// wordDisplay.addEventListener('click', function() {
//             wordDisplay.classList.add('animate__animated','animate__shakeX')
//             console.log(wordDisplay)
//             setTimeout(clearWordDisplayAnim, 1000);
// });



// inputBox.addEventListener('change', function(){
//     // if(e.key == "Enter"){
//         // logInput();
//         checkInputMatch();
//         // clearInputBox();
//         // generateWord();
//         console.log('changed')
//     // }
// })

// buttonInit.addEventListener('click', function(){
//     // console.log('clicked');
//     isGameStart =  true;
//     generateWord();
//     // gameInProgress();
// })