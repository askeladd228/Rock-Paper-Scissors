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
  for (let i = 1; i <= 5; i++) {
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      div.textContent = (`Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}` + '\n' + "You Win! Rock beats Scissors!");
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
    }
  }  

function game() {

  // for (let i = 1; i <= 5; i++) {
    // alert (`Round ${i}`);
    let computerSelection = computerPlay();
    let playerSelection = this.className;
    console.log (playRound(playerSelection, computerSelection));
    // console.log(gameReport());
 }
 


function gameReport() {
    if (playerPoint > computerPoint) {
      return "You win!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    } else if (playerPoint < computerPoint) {
      return "You lose!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    } else if (playerPoint == computerPoint) {
      return "Draw!" + ` Your score: ${playerPoint}` + ` Com score: ${computerPoint}`;
    }  
 }













