console.log('>> script-ran <<')

//10chars50words = ["adsorbable", "adulterine", "farfetched", "autocratic", "illustrate", "decolonise", "underprice", "remarkable", "complicate", "dissilient", "mimeograph", "struggling", "circumvent", "unreadable", "undogmatic", "devitalise", "entrancing", "calibrated", "infallible", "treasonous", "commentate", "relentless", "catacorner", "quarantine", "immaculate", "hemophilic", "assignable", "isotropous", "talismanic", "cogitative", "orthopedic", "foreboding", "contiguous", "slithering", "equipotent", "synonymous", "fastidious", "apostatise", "ingratiate", "masquerade", "gregarious", "confiscate", "adjudicate", "collagenic", "vapourific", "caricature", "exfiltrate", "stochastic", "lipotropic", "ascribable"]
//9chars50words = ["eliminate", "refractory", "desalinise", "bifurcate", "agreement", "apparatus", "executrix", "perforate", "publicity", "anaglyphic", "anaclisis", "fluorosis", "unsinewed", "anecdotic", "elliptical", "apotheose", "unedifying", "parameter", "deviation", "formulate", "timetable", "integrity", "sculpture", "catalogue", "guerrilla", "disappear", "recession", "unanimous", "scorching", "germinate", "reverence", "infuriate", "sedentary", "entangled", "untenable", "unengaged", "malleable", "miniature", "partition", "verminous", "pervasive", "rubberize", "carousing", "integrate", "reversive", "alabaster", "residuary", "byzantine", "patronage", "chambered"]
//13chars25words = ["lackadaisical", "macroscopical", "incorruptible", "irreclaimable", "acculturative", "superstitious", "hypercritical", "gynecological", "transmissible", "unjustifiable", "kaleidoscopic", "anagrammatize", "anachronistic", "differentiate", "unconsecrated", "discretionary", "desynchronize", "unserviceable", " lexicographic", " hypoglycaemic", "disintegrable", "untraversable", "quadrilateral", "reciprocatory", "interrogatory"]
//12chars25words = ["acquaintance", "spokesperson", "constituency", "intelligence", "jurisdiction", "conglomerate", "architecture", "refrigerator", "anticipation", "prescription", "accumulation", "dermatologic", "effervescent", "prejudicious", "algometrical", "pathological", "disciplinary", "intervention", "intermediate", "disagreement", "advantageous", "civilization", "polysemantic", "altitudinous", "monopolistic"]

//easyArr is 10 chars while medArr is 13 chars

// const fixedArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]
// let roundArray = ["position", "develop", "finish", "coerce", "sick", "preparation", "pin", "resource", "vote", "scheme", "theater", "blonde", "syndrome", "spectrum", "heaven", "present", "pluck", "ridge", "soldier", "liability", "extort", "cross", "equinox", "distributor", "promote", "fisherman", "misplace", "choose", "incredible", "costume", "amputate", "application", "conglomerate", "sanctuary", "dictate", "eaux", "grace", "myth", "architecture", "systematic", "expenditure", "trait", "earthwax", "union", "enemy", "justify", "skilled", "vain", "provision", "sunrise"]

//-------------------GLOBAL VARIABLES--------------------------
let isGameStart = false;
let easyArr = ["vertebrate", "adulterine", "farfetched", "autocratic", "illustrate", "decolonise", "underprice", "remarkable", "complicate", "dissilient", "mimeograph", "struggling", "circumvent", "unreadable", "undogmatic", "devitalise", "entrancing", "calibrated", "infallible", "treasonous", "commentate", "relentless", "catacorner", "quarantine", "immaculate", "hemophilic", "assignable", "isotropous", "talismanic", "cogitative", "orthopedic", "foreboding", "contiguous", "slithering", "equipotent", "synonymous", "fastidious", "apostatise", "ingratiate", "masquerade", "gregarious", "confiscate", "adjudicate", "collagenic", "vapourific", "caricature", "exfiltrate", "stochastic", "lipotropic", "ascribable"]
let medArr = ["lackadaisical", "macroscopical", "incorruptible", "irreclaimable", "acculturative", "superstitious", "hypercritical", "gynecological", "transmissible", "unjustifiable", "kaleidoscopic", "anagrammatize", "anachronistic", "differentiate", "unconsecrated", "discretionary", "desynchronize", "unserviceable", " lexicographic", " hypoglycaemic", "disintegrable", "untraversable", "quadrilateral", "reciprocatory", "interrogatory"]
let roundArray;
let usedArray = [];
let currentScore = 0;
let totalScore = 0;
let currentWord = "";
let totalSecs = 4;
let startInterval;
let highScore;
let round = 0;
let player = "";
// let topPlayersArray = [];
// let topScoreArray = [0,0,0];
let scoreArray = [];
let getName;
let nameState = 0;

//-----------SOUND FUNCTIONS----------

function playMatch(){
    let matchSound= new Audio('audio/zapsplat_win1.mp3');
    matchSound.play();
}

function playError(){
    let errorSound = new Audio('audio/zapsplat_error1.mp3');
    errorSound.play();
}

function playHighScore(){
    let highScoreSound = new Audio('audio/zapsplat_highscore.mp3');
    highScoreSound.play();
}

//-----------SOUND FUNCTIONS----------

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
let playerLevelFirst = document.querySelector('.player-level-first');
let playerLevelSecond = document.querySelector('.player-level-second');
let playerLevelThird = document.querySelector('.player-level-third');


let medFirstName = document.querySelector('.med-first-name');
let medSecondName = document.querySelector('.med-second-name');
let medThirdName = document.querySelector('.med-third-name');
let medFirstScore = document.querySelector('.med-first-score');
let medSecondScore = document.querySelector('.med-second-score');
let medThirdScore = document.querySelector('.med-third-score');
let medPlayerLevelFirst = document.querySelector('.med-player-level-first');
let medPlayerLevelSecond = document.querySelector('.med-player-level-second');
let medPlayerLevelThird = document.querySelector('.med-player-level-third');

let level = document.querySelector('#level')


let modal = document.getElementById("myModal");
let modalClose = document.querySelector(".close");
let inputPlayerName = document.querySelector('.input-player-name')
let instruct = document.querySelector('.instruct')

let enterName = "Enter Your Name: "
let noBlanks = "Enter a fake name at least!"
let noNumName = "Try a nickname from A-Z maybe?"

//-------------------FUNCTIONS----------------------------

const modalForName = (toPrint) => {
        modal.style.display = "block";
        instruct.textContent = toPrint
        inputPlayerName.value ="";
        inputPlayerName.focus();
}

modalClose.addEventListener('click', function(){
    modal.style.display = "none";
})

//GET PLAYER NAME 
const getPlayerName = () => {
    modalForName(enterName); 

    inputPlayerName.addEventListener('keypress', function(ev){
        if(ev.key === "Enter"){
            ev.stopImmediatePropagation();
            getName = inputPlayerName.value;
            modal.style.display = "none";
            nameState++
        }

        if(nameState === 1 && !isGameStart){

            if(getName.trim() == "") {
                modalForName(noBlanks);


            } else if(!isNaN(parseInt(getName))) {
                modalForName(noNumName);
        

            } else {
                isGameStart = true;
                player = getName;
                nameDisplay.textContent = `Now playing: ${player}`;
                console.log(player)
                startGame();
                
            }


        console.log('state>> ', nameState)
 
        } 

    nameState = 0;


    })
}


const fixTableNull = () =>{
    if(firstName.textContent === null || firstName.textContent === "null"){
        firstName.textContent = "";
        firstScore.textContent = "";
    }
    if(secondName.textContent === null || secondName.textContent === "null"){
        secondName.textContent = "";
        secondScore.textContent = "";
    }
    if(thirdName.textContent === null || thirdName.textContent === "null"){
        thirdName.textContent = "";
        thirdScore.textContent = "";
    }
    if(medFirstName.textContent === null || medFirstName.textContent === "null"){
        medFirstName.textContent = "";
        medFirstScore.textContent = "";
    }

    if(medSecondName.textContent === null || medSecondName.textContent === "null"){
        medSecondName.textContent = "";
        medSecondScore.textContent = "";
    }
    if(medThirdName.textContent === null || medThirdName.textContent === "null"){
        medThirdName.textContent = "";
        medThirdScore.textContent = "";
    }

}


// -------------- LOCALSTORAGE VAR SETUP ---------------
// let LSfirstName = localStorage.getItem('num1Name');
// let LSfirstScore = localStorage.getItem('num1Score');
// let LSsecondName = localStorage.getItem('num2Name');
// let LSsecondScore = localStorage.getItem('num2Score');
// let LSthirdName = localStorage.getItem('num3Name');
// let LSthirdScore = localStorage.getItem('num3Score');
// let LSfirstLevel = localStorage.getItem('levelFirst');
// let LSsecondLevel = localStorage.getItem('levelSecond');
// let LSthirdLevel = localStorage.getItem('levelThird');



//EASYTIER - LS VARS ----
let LSEfirstName = localStorage.getItem('eFPName');
let LSEfirstScore = localStorage.getItem('eFPScore');
let LSEsecondName = localStorage.getItem('eSPName') 
let LSEsecondScore = localStorage.getItem('eSPScore')
let LSEthirdName = localStorage.getItem('eTPName') 
let LSEthirdScore = localStorage.getItem('eTPScore') 
// let LSELevel = localStorage.getItem('levelEasy') 

let easyTopName = [LSEfirstName, LSEsecondName, LSEthirdName]
let easyTopScore = [LSEfirstScore, LSEsecondScore, LSEthirdScore]

//EASYTIER - DISPLAY
const eThirdGroup = () => {
    if(localStorage.getItem('eTPName')){

        thirdName.textContent = `${localStorage.getItem('eTPName')}`;
        thirdScore.textContent = `${localStorage.getItem('eTPScore')}`;
        // playerLevelThird.textContent = `${localStorage.getItem('levelEasy')}`;
        
    }
}

// //FN - TO FILL 2ND PLACE IN TABLE
const eSecondGroup = () => {
    console.log(localStorage.getItem('eSPName'))

    if(localStorage.getItem('eSPName')){
        secondName.textContent = `${localStorage.getItem('eSPName')}`;
        secondScore.textContent = `${localStorage.getItem('eSPScore')}`;
        // playerLevelSecond.textContent = `${localStorage.getItem('levelEasy')}`;
    }

}

// //FN - TO FILL 1ST PLACE IN TABLE
const eFirstGroup = () => {
    console.log('efpname ' , localStorage.getItem('eFPName'));
    if(localStorage.getItem('eFPName')){
       
        firstName.textContent = `${localStorage.getItem('eFPName')}`;
        firstScore.textContent = `${localStorage.getItem('eFPScore')}`;
        // playerLevelFirst.textContent = `${localStorage.getItem('levelEasy')}`;
    }

}

const isEasyHighScore = () =>{
    if(localStorage.getItem('eFPScore')){
        highScoreDisplay.textContent = localStorage.getItem('eFPScore');
    }
}


function rankingEasy(num, name) {
    console.log("LSEfirstName1", LSEfirstName)
        if (num >= easyTopScore[0]){
            easyTopScore.splice(0, 0, num);
            easyTopName.splice(0, 0, name);
            easyTopScore.pop();
            easyTopName.pop();
            resultModal();
        } else if(num > easyTopScore[1]) {
            easyTopScore.splice(1, 0, num);
            easyTopName.splice(1, 0, name);
            easyTopScore.pop();
            easyTopName.pop();
        } else if (num > easyTopScore[2]) {
            easyTopScore.splice(2, 0, num);
            easyTopName.splice(2, 0, name);
            easyTopScore.pop();
            easyTopName.pop();
        }

        LSEfirstScore = localStorage.setItem('eFPScore', easyTopScore[0])
        LSEfirstName = localStorage.setItem('eFPName', easyTopName[0])
        LSEsecondScore = localStorage.setItem('eSPScore', easyTopScore[1])
        LSEsecondName =  localStorage.setItem('eSPName', easyTopName[1])
        LSEthirdScore = localStorage.setItem('eTPScore', easyTopScore[2])
        LSEthirdName = localStorage.setItem('eTPName', easyTopName[2])


        console.log("LSEfirstName2", localStorage.getItem('eFPName'))
        console.log(level.value)
        // LSELevel = localStorage.setItem('levelEasy', level.value)



        // location.reload();
        console.log("LSEfirstName3", LSEfirstName)
        eFirstGroup();
        eSecondGroup();
        eThirdGroup();
        isEasyHighScore();


        console.log("LSEfirstName4", LSEfirstName)
        console.log(easyTopScore);
        console.log(easyTopName); 
        console.log(localStorage);

}


let LSMfirstName = localStorage.getItem('mFPName');
let LSMfirstScore = localStorage.getItem('mFPScore');
let LSMsecondName = localStorage.getItem('mSPName');
let LSMsecondScore = localStorage.getItem('mSPScore');
let LSMthirdName = localStorage.getItem('mTPName');
let LSMthirdScore = localStorage.getItem('mTPScore');
// let LSMLevel = localStorage.getItem('levelMed');

let medTopName = [LSMfirstName, LSMsecondName, LSMthirdName]
let medTopScore = [LSMfirstScore, LSMsecondScore, LSMthirdScore]

//EASYTIER - DISPLAY
const mThirdGroup = () => {
    if(localStorage.getItem('mTPName')){
        medThirdName.textContent = `${localStorage.getItem('mTPName')}`;
        medThirdScore.textContent = `${localStorage.getItem('mTPScore')}`;
        // medPlayerLevelThird.textContent = `${localStorage.getItem('levelMed')}`;
    }
}

// //FN - TO FILL 2ND PLACE IN TABLE
const mSecondGroup = () => {
    if(localStorage.getItem('mSPName')){
        medSecondName.textContent = `${localStorage.getItem('mSPName')}`;
        medSecondScore.textContent = `${localStorage.getItem('mSPScore')}`;
        // medPlayerLevelSecond.textContent = `${localStorage.getItem('levelMed')}`;
    }
}

// //FN - TO FILL 1ST PLACE IN TABLE
const mFirstGroup = () => {
    console.log('mfpname ' , localStorage.getItem('mFPName'));
    if(localStorage.getItem('mFPName')){
        medFirstName.textContent = `${localStorage.getItem('mFPName')}`;
        medFirstScore.textContent = `${localStorage.getItem('mFPScore')}`;
        // medPlayerLevelFirst.textContent = `${localStorage.getItem('levelMed')}`;
    }
}

const isMedHighScore = () =>{
    if(localStorage.getItem('mFPScore')){
        highScoreDisplay.textContent = localStorage.getItem('mFPScore');
    }
}


function rankingMed(num, name) {

        if (num >= medTopScore[0]){
            medTopScore.splice(0, 0, num);
            medTopName.splice(0, 0, name);
            medTopScore.pop();
            medTopName.pop();
            resultModal();
        } else if(num > medTopScore[1]) {
            medTopScore.splice(1, 0, num);
            medTopName.splice(1, 0, name);
            medTopScore.pop();
            medTopName.pop();
        } else if (num > medTopScore[2]) {
            medTopScore.splice(2, 0, num);
            medTopName.splice(2, 0, name);
            medTopScore.pop();
            medTopName.pop();
        }


        LSMfirstScore = localStorage.setItem('mFPScore', medTopScore[0])
        LSMfirstName = localStorage.setItem('mFPName', medTopName[0])

        LSMsecondScore = localStorage.setItem('mSPScore', medTopScore[1])
        LSMsecondName =  localStorage.setItem('mSPName', medTopName[1])
        
        LSMthirdScore = localStorage.setItem('mTPScore', medTopScore[2])
        LSMthirdName = localStorage.setItem('mTPName', medTopName[2])

        // LSMLevel = localStorage.setItem('levelMed', level.value)

        mFirstGroup();
        mSecondGroup();
        mThirdGroup();
        isMedHighScore();

        console.log(medTopScore);
        console.log(medTopName); 
        console.log(localStorage);

}




//OPTIMIZED LEADERBOARD #1-#3 FUNCTIONS
//FN - TO FILL 3RD PLACE IN TABLE
// const thirdGroup = () => {
//     if(LSthirdName && LSthirdScore && LSthirdLevel){
//         thirdName.textContent = `${LSthirdName}`;
//         thirdScore.textContent = `${LSthirdScore}`;
//         playerLevelThird.textContent = `${LSthirdLevel}`;
        
//     }
// }

// // //FN - TO FILL 2ND PLACE IN TABLE
// const secondGroup = () => {
//     if(LSsecondName && LSsecondScore && LSsecondLevel){
//         secondName.textContent = `${LSsecondName}`;
//         secondScore.textContent = `${LSsecondScore}`;
//         playerLevelSecond.textContent = `${LSsecondLevel}`;
//     }
// }

// // //FN - TO FILL 1ST PLACE IN TABLE
// const firstGroup = () => {
//     if(LSfirstName && LSfirstScore && LSfirstLevel){
//         firstName.textContent = `${LSfirstName}`;
//         firstScore.textContent = `${LSfirstScore}`;
//         playerLevelFirst.textContent = `${LSfirstLevel}`;
//     }
// }

//FN-TO CHECK IF HIGHSCORE IS EXCEEDED, IF YES, DISPLAY NEW HIGHSCORE
// const isHighScore = () =>{
//     if(LSfirstScore){
//         highScoreDisplay.textContent = LSfirstScore;
//     }
// }


// //FN - UPDATE WALL OF FAME SCOREBOARD WITH LOCALSTORAGE
// const ranking = () => {

//     //TRACK INPUT FOR TESTCASES
//     scoreArray.unshift(totalScore);

//     if(LSfirstScore){
//         //IF THERE ARE EXISTING SCORES
//             if(totalScore >= Number(LSfirstScore)){

//                 //store the array in localstorage, store as string, when get data need to convert(parse)
//                 if(LSsecondName){
//                     LSthirdName =  LSsecondName;
//                     LSthirdScore =  LSsecondScore;
//                     LSthirdLevel = LSsecondLevel;
//                     localStorage.setItem('num3Name', LSthirdName);
//                     localStorage.setItem('num3Score', LSthirdScore);
//                     localStorage.setItem('levelThird', LSthirdLevel)
//                 }


//                 LSsecondName =  LSfirstName;
//                 LSsecondScore =  LSfirstScore;
//                 LSsecondLevel = LSfirstLevel;
//                 localStorage.setItem('num2Name', LSsecondName);
//                 localStorage.setItem('num2Score', LSsecondScore);
//                 localStorage.setItem('levelSecond', LSsecondLevel)


//                 LSfirstScore = totalScore;
//                 LSfirstName = player;
//                 LSfirstLevel =  level.value;
//                 localStorage.setItem('num1Name', LSfirstName);
//                 localStorage.setItem('num1Score', LSfirstScore);
//                 localStorage.setItem('levelFirst', LSfirstLevel);

                
//                 resultModal();

//             } 

//             else if(totalScore > Number(LSsecondScore)) {

//                 if(LSsecondName){
//                     LSthirdName =  LSsecondName;
//                     LSthirdScore = LSsecondScore;
//                     LSthirdLevel = LSsecondLevel;
//                     localStorage.setItem('num3Name', LSthirdName);
//                     localStorage.setItem('num3Score', LSthirdScore);
//                     localStorage.setItem('levelThird', LSthirdLevel)
//                 }


//                 LSsecondName =  player;
//                 LSsecondScore =  totalScore;
//                 LSsecondLevel = level.value;
//                 localStorage.setItem('num2Name', LSsecondName);
//                 localStorage.setItem('num2Score', LSsecondScore);
//                 localStorage.setItem('levelSecond', LSsecondLevel)


//             }

//             else if(totalScore > Number(LSthirdScore)) {

//                 LSthirdName =  player;
//                 LSthirdScore =  totalScore;
//                 LSthirdLevel = level.value;
//                 localStorage.setItem('num3Name', LSthirdName);
//                 localStorage.setItem('num3Score', LSthirdScore);
//                 localStorage.setItem('levelThird', LSthirdLevel);
                

//             }


//     } else {
//         //IF LEADERBOARD IS TOTALLY EMPTY
//         if(totalScore){
//             LSfirstScore = totalScore;
//             LSfirstName = player;
//             LSfirstLevel =  level.value;
//             localStorage.setItem('num1Name', LSfirstName)
//             localStorage.setItem('num1Score', LSfirstScore)
//             localStorage.setItem('levelFirst', LSfirstLevel);

//             resultModal();
//         }
//     }


// //largest number

//     console.log(localStorage);

//     //localStorage array is doing unshift rather than push - just fyi

//     //populate leaderboard
//     firstGroup();
//     secondGroup();
//     thirdGroup();

// }


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



level.addEventListener('change', () =>{

    let easyboard = document.querySelector('.easy-board')
    let medboard = document.querySelector('.med-board')
    if(level.value === "easy") {
        medboard.style.display = "none";
        easyboard.style.display = "block";
        isEasyHighScore();
      
    } else if(level.value === "medium"){
        easyboard.style.display = "none";
        medboard.style.display = "block";
        isMedHighScore();
        mFirstGroup();
        mSecondGroup();
        mThirdGroup();
    }
})


const levelSelector = () => {
    if(level.value === "easy"){
        console.log(level.value);
        roundArray = easyArr.slice(0)
    } else {
        console.log(level.value);
        roundArray = medArr.slice(0)
    }
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
            playMatch();
            updateCurrentScore();
            clearInputBox();
            generateWord();

        } else {
            playError();
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
    if(level.value === "easy"){
        currentScore++
        currentScoreDisplay.textContent = currentScore;
        currentScoreDisplay.style.color = "green";
    } else {
        currentScore = currentScore + 2;
        currentScoreDisplay.textContent = currentScore;
        currentScoreDisplay.style.color = "green";
    }
}


//FN TO DECREMENT SECONDS & DISPLAY RESULTS WHEN TIMEOUT
const countdown = () => {
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
    if(level.value == "easy"){
        rankingEasy(totalScore, player);
    } else {
        rankingMed(totalScore, player);
    }

    fixTableNull();
    
}

//FN TO FIRE RESULT MODAL
const resultModal = () => {
        playHighScore();

        Swal.fire({
        title: `Congrats! New High Score: ${totalScore}`,
        width: 600,
        padding: '3em',
        background: '#202020',
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
    levelSelector();
    // roundArray = fixedArray.slice(0);
    resetTotalScore();
    player = "";
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

//FN TO START GAME
const startGame = () => {
    if (player && isGameStart) {
        // isGameStart = true;
        inputBox.disabled = false;
        inputBox.focus();
        generateWord();
        startInterval = setInterval(countdown, 1000);
        
        inputBox.addEventListener('change', function(e){
            e.stopImmediatePropagation();
                            
            // console.log('----INPUTBOX EVENTLISTENER START---')
            // console.log('Within Change_InputBoxVal ', inputBox.value)
            // console.log('Within_round_', round);

            checkInputMatch();
                    
            // console.log('Within Change_Current Word:', currentWord)
            // console.log('----INPUTBOX EVENTLISTENER END---')

        });
                
        round++;
        gameInProgress();
    }

 }


//------------INITIALIZE PRE-GAMEPLAY--------------
//populate leaderboard when user open browser before gameplay

    eFirstGroup();
    eSecondGroup();
    eThirdGroup();
    isEasyHighScore()

//-------------------------------------------------

//---------------------EVENT LISTENERS----------------------------



buttonInit.addEventListener('click', function(){
        // isGameStart = true;
        // inputBox.disabled = false;
        // inputBox.focus();
        
        resetRound();
        // modalForName();

        getPlayerName();
        
        // generateWord();

        // startGame();

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


//--- > PRE-LOCALSTORAGE IMPLEMENTATION FOR LEADERBOARD
/* if(totalScore > highScore) {
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
FPName = player;
FPScore = totalScore;



if(LSfirstName !== null && LSfirstScore !== null ){
    //IF THERE ARE ALREADY 3 SCORES
        if(FPScore > Number(LSfirstScore)){

            LSthirdName =  LSsecondName;
            LSthirdScore =  LSsecondScore;
            localStorage.setItem('num3Name', LSthirdName);
            localStorage.setItem('num3Score', LSthirdScore);


            LSsecondName =  LSfirstName;
            LSsecondScore =  LSfirstScore;
            localStorage.setItem('num2Name', LSsecondName);
            localStorage.setItem('num2Score', LSsecondScore);


            LSfirstScore = FPScore;
            LSfirstName = FPName;
            localStorage.setItem('num1Name', firstName);
            localStorage.setItem('num1Score', firstScore);

        }
} else {
    //FIRST TIME THERE IS A SCORE
        LSfirstScore = FPScore;
        LSfirstName = FPName;
        localStorage.setItem('num1Name', FPName)
        localStorage.setItem('num1Score', FPScore)
}


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

*/ //END OF CODE FOR PRE-LS LEADERBOARD



/*GET PLAYER NAME & START EVENT LISTENER CODE BEFORE I BREAK IT WITH NAME-MODAL-BOX

const modalForName = () => {
        modal.style.display = "block";
        instruct.textContent = "Enter Your Name: "
        inputPlayerName.value ="";
        inputPlayerName.focus();
        
}

// inputPlayerName.addEventListener('keypress', function ( event ) {  
//     let key = event.keyCode;
//      if (key === 32) {
//        event.preventDefault();
//      } else {
//         inputPlayerName.addEventListener('change', function(e) {
//                 getName = inputPlayerName.value;
        
//                 if ((!isNaN(parseInt(getName)))){
//                     instruct.textContent = `Try a nickname from A-Z maybe?`
//                 } else {
//                     modal.style.display = "none";
//                     // getPlayerName();
//                     // return getName;
//                 }

//             }
    
//         )}
// })



const getPlayerName = () => {

    getName = prompt("Hi, what's your name?")
    if(!isNaN(getName)){
        if(!isNaN(getName)) {
            getName = prompt(`Please enter your name`)

            if((!isNaN(parseInt(getName)))) {
                getName = prompt(`Try a nickname from A-Z maybe?`)
            }

        } else if((!isNaN(parseInt(getName)))) {
            getName = prompt(`Try a nickname from A-Z maybe?`)

            if(getName === "" ) {
                getName = prompt(`Please enter your name`)
            }

        }
    } else {

        // inputPlayerName.addEventListener('keypress', function ( event ) {  
        //     let key = event.keyCode;
        //      if (key === 32) {
        //        event.preventDefault();
        //      } else {
        //         inputPlayerName.addEventListener('change', function(e) {
        //                 getName = inputPlayerName.value;
                
        //                 if ((!isNaN(parseInt(getName)))){
        //                     instruct.textContent = `Try a nickname from A-Z maybe?`
        //                 } else {
        //                     modal.style.display = "none";
        //                     nameDisplay.textContent = `Now playing: ${getName}`;
        //                     player = getName;
                            
        //                     // return getName;
        //                 }
        
        //             }
            
        //         )}
        // })

        nameDisplay.textContent = `Now playing: ${getName}`;
        player = getName;
    }



}





buttonInit.addEventListener('click', function(){
        isGameStart = true;
        inputBox.disabled = false;
        inputBox.focus();
        
        resetRound();

        getPlayerName();
        
        generateWord();

        //     if (isGameStart){
        //         startInterval = setInterval(countdown, 1000);
    
        //         inputBox.addEventListener('change', function(e){
        //             e.stopImmediatePropagation();
                        
        // //                 // console.log('----INPUTBOX EVENTLISTENER START---')
        // //                 // console.log('Within Change_InputBoxVal ', inputBox.value)
        // //                 // console.log('Within_round_', round);

        //                 checkInputMatch();
                
        // //                 // console.log('Within Change_Current Word:', currentWord)
        // //                 // console.log('Within Change_isGameStart:', isGameStart)
        // //                 // console.log('----INPUTBOX EVENTLISTENER END---')

        //         });
            
        //         round++;
        //         gameInProgress();

        //     }
        }
)

*/