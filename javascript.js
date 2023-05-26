function getComputerChoice(){
    return (Math.random() * 3 + 1);
}

function getPlayerChoice() {
    let choice = toLowerCase(prompt("choose rock, paper, or scissors"));

    if (choice == 'rock') {
        return 1;
    }

    if (choice == 'paper') {
        return 2;
    }

    if (choice == 'scissors') {
        return 3;
    }

    else {
        console.log("invalid input");
    }
}

function playRound(getPlayerChoice, getComputerChoice){
    if (getPlayerChoice == 1 && getComputerChoice == 2){
        return 'cw';
    }

    if (getPlayerChoice == 1 && getComputerChoice == 3) {
        return 'pw';
    }

    if (getPlayerChoice == 2 && getComputerChoice == 1) {
        return 'pw';
    }

    if (getPlayerChoice == 2 && getComputerChoice == 3) {
        return 'cw';
    }

    if (getPlayerChoice == 3 && getComputerChoice == 1){
        return 'cw';
    }

    if (getPlayerChoice == 3 && getComputerChoice == 2) {
        return 'pw';
    }

    else {
        return 'tie'
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    while (computerScore < 5 || playerScore < 5) {
        let result = playRound(getPlayerChoice, getComputerChoice);

        if (result == 'cw'){
            computerScore += 1;
        }

        if (result == 'pw'){
            playerScore += 1;
        }

        else {
            continue;
        }
    }

    if (computerScore > playerScore) {
        return console.log("computer wins");
    }

    else {
        return console.log("player wins");
    }
}

console.log(game());