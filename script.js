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
let player = "";
// let playerScore = totalScore;
let topPlayersArray = [];
let topScoreArray = [0,0,0];
// let playersArray = [];
let scoreArray = [0];

//-------------------DOM SELECTORS----------------------------
let wordDisplay = document.querySelector('.word-display');
let inputBox = document.querySelector('.input-box');
let timerDisplay = document.querySelector('.timer');
let currentScoreDisplay = document.querySelector('.current-score');
let totalScoreDisplay = document.querySelector('.total-score');
let buttonInit = document.querySelector('.btn-init');
let nameDisplay = document.querySelector('.player-name');
let highScoreDisplay = document.querySelector('.highest-score');
let firstplace = document.querySelector('.first');
let secondplace = document.querySelector('.second');
let thirdplace = document.querySelector('.third');


//-------------------FUNCTIONS----------------------------
//GET PLAYER NAME 
const getPlayerName = () => {
    let getName = prompt(`hi what's your name?`)
    nameDisplay.textContent = getName;
    player = getName;
}


const ranking = () => {
    scoreArray.unshift(totalScore);
    // playersArray.unshift(player);
    if(totalScore > highScore) {
        // topScoreArray.unshift(totalScore);
        // topPlayersArray.unshift(player);
        topScoreArray[0] = totalScore;

    // } else if (scoreArray[0] <= topScoreArray[0] && scoreArray[0] > topScoreArray[1]) {

    } else if (totalScore <= topScoreArray[0] && totalScore > topScoreArray[1]) {
        topScoreArray[1] = totalScore;


    // } else if (scoreArray[0] <= topScoreArray[1] && scoreArray[0] > topScoreArray[2]) {

    } else if (totalScore <= topScoreArray[1] && totalScore > topScoreArray[2]) {
        topScoreArray[2] = totalScore;

    } 
    console.log('topScArr --> ', topScoreArray);
    console.log('collectionArr --> ', scoreArray);
    console.log(totalScore);
    // if(topScoreArray.length > 3){
    //     topScoreArray.pop();
    // }
}



// const updateFirstRank = () => {
//         rankArray.unshift(player)
//         scoreArray.unshift(totalScore)
//         firstplace.textContent = `#1 ${rankArray[0]} ..... ${scoreArray[0]}`
// }

// const updateRestRank = () => {
//     if(rankArray.length < 3){
//         rankArray.splice(1, 0, player)
//         scoreArray.splice(1, 0, totalScore)
//         secondplace.textContent = `#2 ${rankArray[1]} ..... ${scoreArray[1]}`

//     } else if (rankArray.length > 2 && rankArray < 4){
//         if(totalScore < scoreArray[1]){
//             rankArray.splice(2, 0, player)
//             scoreArray.splice(2, 0, totalScore)
//             thirdplace.textContent = `#3 ${rankArray[2]} ..... ${scoreArray[2]}`
//         } else {
//             rankArray.splice(1, 0, player)
//             scoreArray.splice(1, 0, totalScore)
//             secondplace.textContent = `#2 ${rankArray[1]} ..... ${scoreArray[1]}`
//         }

//     } else {
//         if(totalScore > scoreArray[2]){
//             rankArray.splice(2, 0, player)
//             scoreArray.splice(2, 0, totalScore)
//             thirdplace.textContent = `#3 ${rankArray[2]} ..... ${scoreArray[2]}`
//         }
//     }
// }




//BUTTON DISABLED WHEN GAME IN PROGRESS
const gameInProgress = () => {
    buttonInit.style.backgroundColor = "darkgrey";
    buttonInit.style.color = "grey";
    buttonInit.disabled = true;
}

//BUTTON ENABLED TO RESTART GAME
const gameToStartBtn = () => {
    buttonInit.textContent = 'Play again!'
    buttonInit.style.backgroundColor = "darkgreen";
    buttonInit.style.color = "white";
    buttonInit.disabled = false;
}


//FN-TO GENERATE WORD
const generateWord = () => {
    let rand = Math.floor(Math.random()*roundArray.length);
    let randWord = roundArray[rand];
    roundArray.splice(rand , 1);
    usedArray.push(randWord);
 
    currentWord = randWord;
    wordDisplay.textContent = randWord;
    
}

//FN-TO CLEAR INPUT BOX
const clearInputBox = () =>{
    inputBox.value = "";
}


//FN-TO CHECK IF INPUT WORD MATCH:
    //IF MATCH UPDATE SCORE & RESET SECONDS, GEN NEW WORD.
    //IF DONT MATCH, ANIMATE WORD
const checkInputMatch = () => {
    console.log("CHECK INPUT MATCH GAME START: ", isGameStart)
    console.log('CHECK INPUT MATCH IN-VAL: ', inputBox.value)
    console.log('CHECK INPUT MATCH CURRENT WORD ', currentWord)
    if(isGameStart){
        if(inputBox.value === wordDisplay.textContent){
            console.log('matched');
            updateCurrentScore();
            clearInputBox();
            generateWord();
            totalSecs = 5; 
        } else {
            console.log('DONT match')
            wordDisplay.classList.add('animate__animated','animate__shakeX')
            setTimeout(clearWordDisplayAnim, 1000);
        }
    } 
}

//FN - ANIMATION FOR WRONG WORD INPUT 
const clearWordDisplayAnim = () =>{
    wordDisplay.classList.remove('animate__animated','animate__shakeX')
}

//FN-TO UPDATE CURRENT SCORE
const updateCurrentScore = () => {
    currentScore++
    currentScoreDisplay.textContent = currentScore;
}


//FN-TO CHECK IF HIGHSCORE IS EXCEEDED, IF YES, DISPLAY NEW HIGHSCORE
const isHighScore = () =>{
    if(totalScore > highScore){
        highScore = totalScore;
        highScoreDisplay.textContent = highScore;
        // updateFirstRank();
    } else {
        highScoreDisplay.textContent = highScore;
        // updateRestRank();
    }
}

//FN TO DECREMENT SECONDS & DISPLAY RESULTS WHEN TIMEOUT
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

        displayResult();
        // resultModal();
        gameToStartBtn();
        wordDisplay.textContent = "-- word --";
        clearInputBox();
        inputBox.disabled = true;

        console.log(usedArray);
        console.log(roundArray.length);

    }
}


//FN TO DISPLAY ROUND RESULT
const displayResult = () => {
    totalScore = currentScore
    totalScoreDisplay.textContent = totalScore;
    ranking();
    isHighScore();
}

//FN TO FIRE RESULT MODAL
const resultModal = () => {

          Swal.fire({
            title: `Game Over! Your Score : ${totalScore}`,
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
              rgba(100,100,123,0.4)
              url("../leoclap.gif")
              center top
              no-repeat
            `
          })
}


//FN TO RESET ROUND 
const resetRound = () => {
    usedArray = [];
    roundArray = fixedArray;
    totalSecs = 5;
    currentScore = 0;
    currentScoreDisplay.textContent = currentScore;
    totalScore = 0;
    totalScoreDisplay.textContent = totalScore;
}

//---------------------EVENT LISTENERS----------------------------


buttonInit.addEventListener('click', function(){
        isGameStart = true;
        inputBox.disabled = false;
        inputBox.focus();

        resetRound();

        generateWord();

        if (isGameStart){
            startInterval = setInterval(countdown, 1000);
   
            inputBox.addEventListener('change', function(e){
                e.stopImmediatePropagation();
                    
                    // console.log('----INPUTBOX EVENTLISTENER START---')
                    // console.log('Within Change_InputBoxVal ', inputBox.value)
                    // console.log('Within_round_', round);

                    checkInputMatch();
            
                    // console.log('Within Change_Current Word:', currentWord)
                    // console.log('Within Change_isGameStart:', isGameStart)
                    // console.log('----INPUTBOX EVENTLISTENER END---')

            });
        
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

// inputBox.addEventListener('input', function(){
//     console.log(inputBox.value)
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