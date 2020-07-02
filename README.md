# SEI-23 Project 1

## Introduction: Just My Type
This is a Speed-Typing Game.
Link to Game: [Just My Type](https://andicodetrf.github.io/ProjectOne_JustMyType/)

#### Game Sequence & Objectives
1. Player starts the game by clicking in the start button.
2. Modal prompt appears for Player to enter his/her name. When a valid name (text) is entered, the modal prompt closes and the game begins. 
3. A word is displayed. Player is given 4 seconds to complete typing the same word. If the word-input matches within 4 seconds, a point is added to Player's current score, a new word will be displayed and the timer resets to 4 seconds. 
4. If the word-input does not match, the player will be notified by the animated displayed word and the player would need to correct the word-input before the timer is up. 
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
- A 50-words array where word is randomly selected/displayed.  
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
7. Sourced CSS background animation code from codepen Marcelo (Mr. Smith). Replaced sourced image with own-sourced image.


#### Bugs & Issues Faced


#### Further Possible Improvements
