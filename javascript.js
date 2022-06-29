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
  } else if(playerSelection === "" || playerSelection === null) {
      console.log(`Your point: ${playerPoint} and Computer\'s point: ${++computerPoint}`);  
      return "You didn't even make a choice!";
  } else {console.log(`Your point: ${playerPoint} and Computer\'s point: ${computerPoint}`); 
      return "It's a Draw!";
  }
}

let computerSelection = computerPlay();
  //let user input a choice

function game() {
  let playerSelection = prompt('Rock, Paper, Scissors?', '');
  console.log(playRound(playerSelection, computerSelection));
}

 //game report
 function gameReport() {
    if (playerPoint > computerPlay) {
      return "You win!"
    } else if (playerPoint == computerPoint) {
      return "Draw. Rematch!"
    } else return "You lose!"
  }

//make a game five rounds
for (let i = 0; i < 5; i++) {
    if (i === 0) {
      alert("Round 1");
      game();
    } else if (i === 1) {
      alert("Round 2");
      game();
    } else if (i === 2) {
      alert("Round 3");
      game();
    } else if (i === 3) {
      alert("Round 4");
      game();
    } else {
      alert("Final Round");
      game();
    }
 }

 console.log(gameReport());





//(playerSelection.toUpperCase() !== 'ROCK') || (playerSelection.toUpperCase() !== 'PAPER') || (playerSelection.toUpperCase() !== 'SCISSORS')) 

