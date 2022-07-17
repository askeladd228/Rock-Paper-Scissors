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
  if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log(`Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}`);  
    return "You Win! Rock beats Scissors!";
  } else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
      console.log(`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}`);  
      return "You Lose! Scissors beats Paper!";
  } else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
      console.log(`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}`); 
      return "You Lose! Paper beats Rock!";
  } else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
      console.log(`Your point: ${++playerPoint} and Computer\'s point: ${computerPoint}`);  
      return "You Win! Scissors beats Paper";
  } else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
      console.log(`Your point: ${++playerPoint} and Computer\'s point ${computerPoint}`);  
      return "You Win! Paper beats Rock!";
  } else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
      console.log(`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}`);  
      return "You Lose! Rock beats Scissors";
  } else if((playerSelection === "") || (playerSelection === null)) {
      console.log(`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}`);  
      return "You didn't even make a choice!";
  } else if ((playerSelection.toUpperCase !== 'ROCK') || (playerSelection.toUpperCase !== 'PAPER') || (playerSelection.toUpperCase !== 'SCISSORS') )
      console.log (`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}`);
      return "It's rock, paper, or scissors my dude.";
  }

function game() {
  for (let i = 1; i <= 5; i++) {
    alert (`Round ${i}`);
      let playerSelection = prompt('Rock, Paper, Scissors?', '');
      let computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
 } 
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

game();
console.log(gameReport());






//(playerSelection.toUpperCase() !== 'ROCK') || (playerSelection.toUpperCase() !== 'PAPER') || (playerSelection.toUpperCase() !== 'SCISSORS')) 

