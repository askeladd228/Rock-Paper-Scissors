const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const boardsContainer = document.querySelector('.boardsContainer');
const scoreBoardContainer = document.querySelector('.scoreBoardContainer');
const resultContainer = document.querySelector('.resultContainer');

rock.classList.add('ROCK');
paper.classList.add('PAPER');
scissors.classList.add('SCISSORS');

rock.textContent ='ROCK';
paper.textContent = 'PAPER';
scissors.textContent = 'SCISSORS';

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

const container = document.querySelector('.container');
const bigContainer = document.querySelector('.bigContainer');
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const scoreBoard = document.createElement("div");
scoreBoard.classList.add('score');
const result = document.createElement('div');
result.classList.add('result');

const scoreBoardTitle = document.createElement("h2");
scoreBoardTitle.textContent = 'SCOREBOARD';
scoreBoardTitle.classList.add('title');
scoreBoardContainer.appendChild(scoreBoardTitle);
scoreBoardContainer.appendChild(scoreBoard);
boardsContainer.appendChild(scoreBoardContainer);

const resultTitle = document.createElement("h2");
resultTitle.textContent = 'RESULT';
resultTitle.classList.add('title');
resultContainer.appendChild(resultTitle);
resultContainer.appendChild(result);
boardsContainer.appendChild(resultContainer);

bigContainer.appendChild(boardsContainer);

const array = ['ROCK', 'PAPER', 'SCISSORS'];

//let computer generate a random choice
function computerPlay() {
  return array[Math.floor(Math.random()*array.length)];
}

//starting point
let playerPoint = 0;
let computerPoint = 0;

//create the game mechanism and play a round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      scoreBoard.textContent = `Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}`
      result.textContent = "You Win! Rock beats Scissors!"
      } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        scoreBoard.textContent = `Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` 
        result.textContent = "You Lose! Scissors beats Paper!"
      } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        scoreBoard.textContent = `Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` 
        result.textContent = "You Lose! Paper beats Rock!"
      } else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        scoreBoard.textContent = `Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}` 
        result.textContent = "You Win! Scissors beats Paper"
      } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        scoreBoard.textContent = `Your point: ${++playerPoint} and Computer\'s point ${computerPoint}` 
        result.textContent = "You Win! Paper beats Rock!"
      } else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        scoreBoard.textContent = `Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` 
        result.textContent = "You Lose! Rock beats Scissors"
      } else if((playerSelection === "") || (playerSelection === null)) {
        scoreBoard.textContent = `Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` 
        result.textContent = "You didn't even make a choice!"
      } else {
        scoreBoard.textContent = `Your point: ${playerPoint} and Computer\'s point: ${computerPoint}` 
        result.textContent = "Draw"
      }
    scoreBoardContainer.appendChild(scoreBoard);
    resultContainer.appendChild(result);
    if ((playerPoint === 5) || (computerPoint === 5)) {
      gameReport();
      playerPoint = 0;
      computerPoint = 0;
    }
  }
  

function game() {
  let computerSelection = computerPlay();
  let playerSelection = this.className;
  playRound(playerSelection, computerSelection);
 }
 


function gameReport() {
    if (playerPoint > computerPoint) {
      scoreBoard.textContent = "You win!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    } else if (playerPoint < computerPoint) {
      scoreBoard.textContent = "You lose!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    } else if (playerPoint == computerPoint) {
      scoreBoard.textContent = "Draw!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    }  
 }














