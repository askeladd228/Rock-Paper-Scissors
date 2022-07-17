const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

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
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const div = document.createElement("div");

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
      div.textContent = (`Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}` + "\nYou Win! Rock beats Scissors!");
      } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        div.textContent = (`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` + '\n' + "You Lose! Scissors beats Paper!");
      } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        div.textContent = (`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` + '\n' + "You Lose! Paper beats Rock!");
      } else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        div.textContent = (`Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}` + '\n' + "You Win! Scissors beats Paper");  
      } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        div.textContent = (`Your point: ${++playerPoint} and Computer\'s point ${computerPoint}` + '\n' + "You Win! Paper beats Rock!");  
      } else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        div.textContent = (`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` + '\n' + "You Lose! Rock beats Scissors");  
      } else if((playerSelection === "") || (playerSelection === null)) {
        div.textContent = (`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}` + '\n' + "You didn't even make a choice!");  
      } else {
        div.textContent = (`Your point: ${playerPoint} and Computer\'s point: ${computerPoint}` + '\n' + "Draw");
      }
    container.appendChild(div);
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
      div.textContent = "You win!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    } else if (playerPoint < computerPoint) {
      div.textContent = "You lose!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    } else if (playerPoint == computerPoint) {
      div.textContent = "Draw!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    }  
 }














