# SEI-23 Project 1

## Introduction: Just My Type
This is a Speed-Typing Game.
Link to Game: [Just My Type](https://andicodetrf.github.io/ProjectOne_JustMyType/)

#### Game Sequence & Objectives
1. Player starts the game by clicking the start button.
2. Modal prompt appears for Player to enter his/her name. When a valid name (text) is entered, the modal prompt closes and the game begins. 
3. The game begins by displaying a word. Player is given 4 seconds to complete typing the same word. If the word-input matches within 4 seconds, a point is added to Player's current score, a new word will be displayed and the timer resets to 4 seconds. 
4. If the word-input does not match, the player will be notified by the wiggling animation of displayed word and the player would need to correct the word-input before the timer is up. 
5. If the timer is up, the game ends. Player will be notified on his/her overall score. 
6. The game objective is to gain the highest score possible. 


#### Project#1: The Game - Requirements
**Technical Requirements**
- Display a game in the browser
- Be interactive
- Include separate HTML / CSS / JavaScript files
- Use Javascript for DOM manipulation that is triggered by a browser event

**Required Deliverables**
- A non-broken game, built by you, hosted somewhere on the internet
- A link to your hosted working game in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
- A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

## Delivery:
#### Minimum Viable Product Features
- A 50-words array with its word randomly selected/displayed.  
- Start button, disable button once game starts. Enable Start button once game ends.
- Enable input box once game starts, disable input box when game ends / has not started. 
- Display previous gameplay highest score (high score).
- Countdown timer, display remaining time.
- Check player's word-input matches word displayed.
- Collect player's score, display total score for the round, sets new high score if player's total score exceeds previous high score.
- Minimal styling.

#### Additional Game Features 
- Modal box to display new high score message if high score has been exceeded.
- a congrats statement in the event the player finishes all the words in the game (array).
- Browser prompt player for name, validate input to ensure input begins with letters. Prompt player to enter name again with different messages based on player's invalid input type such as non-input, empty string or numbers. 
- Basic styled leaderboard displaying top 3 scorers and their points.
- Drop-down menu for difficulty levels: Easy (50 words) and Medium(25 words)
- Varied points system for easy tier and medium tier scoring.

#### Further Additional Game Features
- Updated name prompt from browser-type prompt to modal box.
- Allow player to cancel from starting game by closing the modal name prompt. 
- Store in memory the highest score so that the next time the player visits the game site from the same browser (and device), the highest score remains.
- Store in memory the top 3 scores so that the next time the player visits the game site from the same browser (and device), the top 3 scores remain. 
- Sound effects for word match, wrong word input and new high score.
- Animated background.
- Display respective leaderboard according to player's level selection (Easy or Medium)


<img src="./justmytype.gif">

#### Game Design & Pseudo Code Planning
- Dropdown difficulty level for Player's selection
     - If level "easy" is selected (also the default when page loads): 
          - display easy-level leaderboard
          - display high score based on easy-level's highest score
          - hide med-level leaderboard
     - Else 
          - display med-level leaderboard
          - display high score based on med-level's highest score
          - hide easy-level leaderboard

- After level selection, wait for Player to click Start Button

- When start button is clicked:

    - Resets total score, resets player name (acts as a reset - for subsequent rounds)
    - Checks player's difficulty level selection and retrieve words from the respective array (either Easy Array or Med Array)
    - Get player's name - if player's name input is valid, gameState sets to true and start game.
        - When game in progress:
            - display player's name at the top of the page
            - disable start button, disable dropdown level selection, enable input box for player's word-input.

    - Display randomized word from game array. Remove displayed word from game array to ensure no repeated words in that round.
    - Start countdown timer at 4 secs. 
    - Listen for player's word-input entered into input box. Check whether the word-input matches word-display. 

        - If word matches, 
            - add points to player's current score & display (if game-round is easy tier, +1 point for each word match. +2 points for medium tier)
            - resets countdown timer to 4 secs
            - generate and display new word

        - If word mismatch, 
            - word display wiggle
            - unable to go to next word

    - If timer hits 0 secs, 
        - gameState sets to false;
        - clear countdown timer interval
        - display total score, update high score (if exceeded)
        - if new high score, fire modal box message
        - checks whether player is within top 3 via ranking functions. update leaderboard accordingly if within top 3. 
        - resets page display to pre-gameplay (name, current score, timer)
        - enable Start button for next round/gameplay, enable dropdown level selection


#### Technologies used:
1. Javascript
2. CSS
3. HTML
4. Animation.css for word-wiggle due to word mismatch 
5. Sweetalert2 modal box for new high score
6. Bootstrap4 for Leaderboard
7. Sourced CSS background animation code from [codepen Marcelo (Mr. Smith)](https://codepen.io/Mr_Smith/details/YPLoKW).  Replaced sourced image with own-sourced image.


#### Bugs & Issues Faced
##### Resolved:
1. Round 2 onwards, there seem to be multiple events with each word-input which evaluate both IF and ELSE conditions in check-word-match function. The first cycle somehow registers an empty input from the input box, goes into ELSE causing display word to wiggle. The second cycle registers player's word input and goes into IF. Word-match evaluation and scoring would still work with this bug but the word will wiggle regardless of word-match or not.
    - Resolved: using event.StopImmediatePropagation() method stops the rest of the event handlers from being executed. From MDN: The stopImmediatePropagation() method of the Event interface prevents other listeners of the same event from being called. From MDN, "If several listeners are attached to the same element for the same event type, they are called in the order in which they were added. If stopImmediatePropagation() is invoked during one such call, no remaining listeners will be called."

2. Local storage implementation - player's score does not get displayed immediately in leaderboard. It would only display if page refreshes/reload. 
    - Resolved: When page reloads, localstorage var setup gets all item. in ranking function after gameplay, the localstorage var sets items based on gameplay score. Leaderboard display functions (after gameplay) was initally using those localstorage "setItem" variables. The problem was resolved by modifying leaderboard display functions - replace localstorage "setItem" variables with local storage getItems. 

3. Player could switch difficulty level in the middle of a gameplay and the game would still continue. 
    - Resolved: Disable dropdown level selection when game in progress. 

4. The earlier game design uses browser prompt box for name input. It was capable of pausing all browser events until the prompt box is closed, then game begins. In a later version, a modal box is used to replace browser prompt box however modal box does not pause other events (start game function was tied to start button event listener) causing game to run even when modal box was still opened. 
    - Resolved: Rearrange game execution function to let it be called only after modal box closes. 

5. Game starts if player typed in some text name and closes the modal box via close (x) button (clicking x is supposed to cancel the game).
    - Resolved: The original input-box in modal box was set to listen for "change". The problem was resolved by replacing the listener from "change" to "enter". 

###### Unresolved: [04/07/2020 - Resolved by using array data for display functions conditions. FixTableNull functions no longer needed therefore removed.]
1. Null word display in Medium Tier leaderboard after a round has been played in either Easy or Med tier. Null word display disappears temporarily right after a Med-Tier is played. It also disappears when Med-Tier has been played more than 2 times (this fills up all the 3 rows in leaderboard). If no round or less than 2 rounds have been played in either easy or med - when player toggles between easy & med level via dropdown, Null word displays in 2nd and/or 3rd placement.

2. The highscore for Easy & Medium Tier displays null when 
      - **there are no scores in either yet and**
        - **player plays medium tier and scores 0** - med tier displays high score as 0 and no record is added to leaderboard
        - player toggles to easy tier - high score shows null
        - player toggles back to med tier - high score shows null as well


#### Further Possible Improvements
- Refactor localstorage setup and ranking & rank display functions - Use objects to store player's information, evaluate and update accordingly. 
- Make the word array more dynamic where it starts with 10 easy words (first bracket). On the next bracket, slightly more difficult words and so on. 
- Overhaul scoring system from point system to level-up system. Remove dropdown selection. Let player begin at Level 1 and only after completing Level 1, let player proceed to Level 2 and so on. Only 1 leaderboard to show top 3 levels attained by any player (eg. Level 99). 

