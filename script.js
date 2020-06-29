console.log('>> script-ran <<')


//-------------------GLOBAL VARIABLES--------------------------
let isGameStart = false;
const fixedArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]
let roundArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]
let usedArray = [];
let currentScore = 0;
let totalScore = 0;
let currentWord = "";
let totalSecs = 4;
let startInterval;
let highScore = 0;
let round = 0;
let player = "";
let topPlayersArray = [];
let topScoreArray = [0,0,0];
let scoreArray = [];

// let champion = {
//     name: topPlayersArray[0],
//     score: topScoreArray[0]
// }

// let firstRunner = {
//     name: topPlayersArray[1],
//     score: topScoreArray[1]
// }

// let secondRunner = {
//     name: topPlayersArray[2],
//     score: topScoreArray[2]
// }


//-------------------DOM SELECTORS----------------------------
let wordDisplay = document.querySelector('.word-display');
let inputBox = document.querySelector('.input-box');
let timerDisplay = document.querySelector('.timer');
let currentScoreDisplay = document.querySelector('.current-score');
let totalScoreDisplay = document.querySelector('.total-score');
let buttonInit = document.querySelector('.btn-init');
let nameDisplay = document.querySelector('.player-name');
let highScoreDisplay = document.querySelector('.highest-score');

//WITHOUT BOOTSTRAP
// let firstplace = document.querySelector('.first');
// let secondplace = document.querySelector('.second');
// let thirdplace = document.querySelector('.third');

let firstName = document.querySelector('.first-name');
let secondName = document.querySelector('.second-name');
let thirdName = document.querySelector('.third-name');
let firstScore = document.querySelector('.first-score');
let secondScore = document.querySelector('.second-score');
let thirdScore = document.querySelector('.third-score');


//-------------------FUNCTIONS----------------------------
//GET PLAYER NAME 
const getPlayerName = () => {
    let getName = prompt(`hi what's your name?`)
    nameDisplay.textContent = `Now playing: ${getName}`;
    player = getName;
}


//FN - TO FILL 3RD PLACE IN TABLE
const thirdGroup = () => {
    thirdName.textContent = `${topPlayersArray[2]}`;
    thirdScore.textContent = `${topScoreArray[2]}` ;
}

//FN - TO FILL 2ND PLACE IN TABLE
const secondGroup = () => {
    secondName.textContent = `${topPlayersArray[1]}`;
    secondScore.textContent = `${topScoreArray[1]}`;
}

//FN - TO FILL 1ST PLACE IN TABLE
const firstGroup = () => {
    firstName.textContent = `${topPlayersArray[0]}`;
    firstScore.textContent = `${topScoreArray[0]}`;
}


//FN - UPDATE WALL OF FAME SCOREBOARD
const ranking = () => {
    scoreArray.unshift(totalScore);

    if(totalScore > highScore) {
        if(topScoreArray[0] > 0){
                if(topScoreArray[1] > 0){


                    topScoreArray[2] = topScoreArray[1]
                    topPlayersArray[2] = topPlayersArray[1]

                    // thirdplace.textContent = `#3 ${topPlayersArray[2]} . . . . . . . . ${topScoreArray[2]}`
                    thirdGroup();

                    topScoreArray[1] = topScoreArray[0]
                    topPlayersArray[1] = topPlayersArray[0]
                    
                    // secondplace.textContent = `#2 ${topPlayersArray[1]} . . . . . . . . ${topScoreArray[1]}` 
                    secondGroup();



                } else {
                    topScoreArray[1] = topScoreArray[0]
                    topPlayersArray[1] = topPlayersArray[0]

                    // secondplace.textContent = `#2 ${topPlayersArray[1]} . . . . . . . . ${topScoreArray[1]}` 
                    secondGroup();
                }
        }

        topScoreArray[0] = totalScore;
        topPlayersArray[0] = player;

        // firstplace.textContent = `#1 ${topPlayersArray[0]} . . . . . . . . ${topScoreArray[0]}`
        firstGroup();



    } else if (totalScore <= topScoreArray[0] && totalScore > topScoreArray[1]) {
        if(topScoreArray[1] > 0){
            topScoreArray[2] = topScoreArray[1]
            topPlayersArray[2] = topPlayersArray[1]

            // thirdplace.textContent = `#3 ${topPlayersArray[2]} . . . . . . . . ${topScoreArray[2]}` 
            thirdGroup();

        }
        topScoreArray[1] = totalScore;
        topPlayersArray[1] = player;
        
        // secondplace.textContent = `#2 ${topPlayersArray[1]} . . . . . . . . ${topScoreArray[1]}`
        secondGroup();

    

    } else if (totalScore <= topScoreArray[1] && totalScore > topScoreArray[2]) {
        topScoreArray[2] = totalScore;
        topPlayersArray[2] = player;

        // thirdplace.textContent = `#3 ${topPlayersArray[2]} . . . . . . . . ${topScoreArray[2]}`
        thirdGroup();
    } 
    console.log('topScArr --> ', topScoreArray);
    console.log('collectionArr --> ', scoreArray);
    console.log(totalScore);

}

//pseudocode for LS
//if first, second and third do not exist, 
 //localStorage.setItem('firstplayer','firstscore')
 //localStorage.setItem('secondplayer','secondscore')
 //localStorage.setItem('thirdplayer','thirdscore')

 //if they do, 
 //check ifcurrent first player > firstplayerLS , if yes 
        //setItem('currentfirstplayer', currentFS)
        //setItem('previousFirstplayer = secondplayer, previousFirstPlayerScore)
        //setItem('previousSecplayer = thirdplayer, previousSecPlayerScore)

//check if current second player > secondplayerLS, if yes

//setItem('currentseconddplayer', currentSS)
//setItem('previousSecplayer = thirdplayer, previousSecPlayerScore)

//check if current third player > thirdplayerLS, if yes

//setItem('currentthirdplayer', currentTS)



//BUTTON DISABLED WHEN GAME IN PROGRESS
const gameInProgress = () => {
    buttonInit.textContent = 'Game on!'
    buttonInit.style.backgroundColor = "darkgrey";
    buttonInit.style.color = "grey";
    buttonInit.disabled = true;
    buttonInit.classList.remove('hover');
}

//BUTTON ENABLED TO RESTART GAME
const gameToStartBtn = () => {
    buttonInit.textContent = 'START'
    buttonInit.style.backgroundColor = "darkgreen";
    buttonInit.style.color = "white";
    buttonInit.disabled = false;
    buttonInit.classList.add('hover');
}

//FN-TO ALERT THAT ALL WORDS ARE COMPLETED
const completedWords = () => {
    wordDisplay.textContent = "CONGRATS YOU DID ALL THE WORDS"
}


//FN-TO GENERATE WORD
const generateWord = () => {
    if(roundArray.length>0){
        let rand = Math.floor(Math.random()*roundArray.length);
        let randWord = roundArray[rand];
        roundArray.splice(rand , 1);
        usedArray.push(randWord);
        totalSecs = 4;
        currentWord = randWord;
        wordDisplay.textContent = randWord;


    } else {
        //if player completed all the words in the array, display 2 secs
        totalSecs = 1;
        completedWords();
    }
    
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
    currentScoreDisplay.style.color = "green";
}


//FN-TO CHECK IF HIGHSCORE IS EXCEEDED, IF YES, DISPLAY NEW HIGHSCORE
const isHighScore = () =>{
    if(totalScore > highScore){
        highScore = totalScore;
        highScoreDisplay.textContent = highScore;
    } else {
        highScoreDisplay.textContent = highScore;
    }
}

//FN TO DECREMENT SECONDS & DISPLAY RESULTS WHEN TIMEOUT
const countdown = () =>{
    if(totalSecs > 0){
        console.log(totalSecs);
        timerDisplay.textContent = totalSecs;
        timerDisplay.style.color = "red";
        totalSecs--;
        console.log('>> Countdown Progress isGameStart', isGameStart)

    } else {
        timerDisplay.style.color = "white"
        timerDisplay.textContent = "--";
        clearInterval(startInterval)
        isGameStart = false;
        console.log('$$ Countdown END isGameStart', isGameStart)

        displayResult();
        // resultModal();
        gameToStartBtn();

        wordDisplay.textContent = "-- word --";
        nameDisplay.textContent = `< Click Start to Play >`;
        resetCurrentScore();

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
    roundArray = fixedArray.slice(0);
    // totalSecs = 4;
    resetTotalScore();
}

//FN TO RESET CURRENT SCORE
const resetCurrentScore = () => {
    currentScore = 0;
    currentScoreDisplay.textContent = currentScore;
    currentScoreDisplay.style.color = "white";
}

//FN TO RESET TOTAL SCORE
const resetTotalScore = () =>{
    totalScore = 0;
    totalScoreDisplay.textContent = totalScore;
}

//---------------------EVENT LISTENERS----------------------------


buttonInit.addEventListener('click', function(){
        isGameStart = true;
        inputBox.disabled = false;
        inputBox.focus();

        resetRound();
        getPlayerName();
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