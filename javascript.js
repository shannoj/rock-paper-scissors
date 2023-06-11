var computerScore = 0;
var playerScore = 0;
var roundCount = 1;
var round = document.getElementById('round');
var winner = document.getElementById('winner');
var score = document.getElementById('score');
var compScore = document.getElementById('compScore');
var playScore = document.getElementById('playScore');
var playAgain = document.getElementById('playAgain')
var no = document.getElementById('no');
var yes = document.getElementById('yes');
var goodbye = document.getElementById('goodbye');
yes.style.display = 'none';
no.style.display = 'none';
var bodyElement = document.body;

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let number = (getRandomInt(3) + 1);
    if (number == 3){
        return 'scissors';
    }

    if (number == 2) {
        return 'paper';
    }

    if (number == 3){
        return 'rock';
    }
}

function playRound(getPlayerChoice, getComputerChoice){
    if (getPlayerChoice == 'rock' && getComputerChoice == 'paper'){
        return 'cw';
    }

    if (getPlayerChoice == 'rock' && getComputerChoice == 'scissors') {
        return 'pw';
    }

    if (getPlayerChoice == 'paper' && getComputerChoice == 'rock') {
        return 'pw';
    }

    if (getPlayerChoice == 'paper' && getComputerChoice == 'scissors') {
        return 'cw';
    }

    if (getPlayerChoice == 'scissors' && getComputerChoice == 'rock'){
        return 'cw';
    }

    if (getPlayerChoice == 'scissors' && getComputerChoice == 'paper') {
        return 'pw';
    }

    else {
        return 'tie';
    }
}

function endGame(){
    if (playerScore == 3){
        winner.textContent = 'Player wins in ' + roundCount + " rounds";
    }

    else {
        winner.textContent = 'Computer wins in ' + roundCount + " rounds";
    }

    var buttons = document.getElementsByClassName('game-button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

    playAgain.textContent = "Do you want to play again?";
    yes.style.display = 'block';
    no.style.display = 'block';
    yes.textContent = 'Yes';
    no.textContent = 'No';

    no.addEventListener('click', function(){
        goodbye.textContent = 'Alright, goodbye!';
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
          }
        yes.disabled = true;
        no.disabled = true;
        round.textContent = '';
        winner.textContent = '';
        playScore.textContent = '';
        compScore.textContent = '';
        playAgain.textContent = '';
        yes.style.display = 'none';
        no.style.display = 'none';
        rockButton.style.display = 'none';
        scissorsButton.style.display = 'none';
        paperButton.style.display = 'none';
    })

    yes.addEventListener('click', function(){
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = false;
        }
    
        computerScore = 0;
        playerScore = 0;
        roundCount = 0;
        round.textContent = '';
        winner.textContent = '';
        playScore.textContent = '';
        compScore.textContent = '';
        playAgain.textContent = '';
        yes.style.display = 'none';
        no.style.display = 'none';
    })
}

function getPlayerChoice(choice) {
    var result = playRound(choice, getComputerChoice());
    console.log(result);
    if (result == 'cw'){
        computerScore += 1;
        round.textContent = "Computer wins round " + roundCount;
        compScore.textContent = "Computer: " + computerScore;
        playScore.textContent= "Player: " + playerScore;
        if (playerScore > computerScore){
            playScore.style.color = 'green';
            compScore.style.color = 'red';
        }
        if (computerScore > playerScore){
            playScore.style.color = 'red';
            compScore.style.color = 'green';
        }
        if (computerScore == playerScore){
            playScore.style.color = '#CCCC00';
            compScore.style.color = '#CCCC00';
        }
    }

    if (result == 'pw'){
        playerScore += 1;
        round.textContent = "Player wins round " + roundCount;
        compScore.textContent = "Computer: " + computerScore;
        playScore.textContent= "Player: " + playerScore;
        if (playerScore > computerScore){
            playScore.style.color = 'green';
            compScore.style.color = 'red';
        }
        if (computerScore > playerScore){
            playScore.style.color = 'red';
            compScore.style.color = 'green';
        }
        if (computerScore == playerScore){
            playScore.style.color = '#CCCC00';
            compScore.style.color = '#CCCC00';
        }
    }

    if (result == 'tie'){
        round.textContent = "Round " + roundCount + " is a tie";
        round.style.color = randomColor();
        compScore.textContent = "Computer: " + computerScore;
        playScore.textContent= "Player: " + playerScore;
        if (playerScore > computerScore){
            playScore.style.color = 'green';
            compScore.style.color = 'red';
        }
        if (computerScore > playerScore){
            playScore.style.color = 'red';
            compScore.style.color = 'green';
        }
        if (computerScore == playerScore){
            playScore.style.color = '#CCCC00';
            compScore.style.color = '#CCCC00';
        }
    }

    if (playerScore == 3 || computerScore == 3){
        endGame();
    }

    roundCount += 1;

}

var rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function(){
    getPlayerChoice('rock');
})

var paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function(){
    getPlayerChoice('paper');
})

var scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function(){
    getPlayerChoice('scissors');
})

