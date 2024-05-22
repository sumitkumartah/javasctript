//take random number
let randomNumber = parseInt(Math.random() * 100 + 1);
//take the submit
const submit = document.querySelector('#subt');

//take the input
const userInput = document.querySelector('#guessField');

//take the previous guess
const guessSlot = document.querySelector('.guesses');
//take remaining
const remaining = document.querySelector('.lastResult');

//take lowOrhigh
const lowOrHi = document.querySelector('.lowOrHi');

//take the resultpara (if user have wested all the guess we will not show the previous guess and browser will say to start again)
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
//here take an array to store the previous guess value
let prevGuess = [];

//take initially no of guess is 1
let numGuess = 1;
//for these type of games where are limited amount of attempt there use playgame=true variable
let playGame = true;

//check availabe to play games 

if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }


//check guess number is validate(within 0 to 100)
function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }
//here check is this number is equal to the random number (if equal then call the displayMessage or if low diaplay low...)
function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
      displayMessage(`Number is TOOO High`);
    }
  }

//it will clean the value for next input and guess array will update and diplay it and also guess remaining also update
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
  }
  
//this will interact with dom and diaplay the message
  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }


//endgame to end the game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
//end the game and start a new game 
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }

