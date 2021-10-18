//Let's create the logic for the game.
// define some items
let rock = document.getElementById("rock");

let paper = document.getElementById("paper");

let scissors = document.getElementById("scissors");

let lizard = document.getElementById("lizard");

let spock = document.getElementById("Spock");

let select = document.getElementById("select");

let opponent = document.getElementById("opponent");

let play = document.getElementById("play");

let winner = document.getElementById("winner");

let userChoice;
let computerChoice;




//event listeners 5x to change the picture source.
rock.addEventListener("click", function (){
    select.src = "IMG/rock.jpg";
    userChoice = "rock";
})
paper.addEventListener("click", function (){
    select.src = "IMG/paper.jpg";
    userChoice = "paper";
})
scissors.addEventListener("click", function (){
    select.src = "IMG/scissors.jpg";
    userChoice = "scissors";
})
lizard.addEventListener("click", function (){
    select.src = "IMG/lizard.jpg";
    userChoice = "lizard";
})
spock.addEventListener("click", function (){
    select.src = "IMG/spock.jpg";
    userChoice = "spock";
})

play.addEventListener("click", function (){
    let random = Math.floor(Math.random() * 5);
    console.log(random)
    switch (random) {
        case (0):
            opponent.src = "IMG/rock.jpg";
            computerChoice = "rock";
            break;
        case (1):
            opponent.src = "IMG/paper.jpg";
            computerChoice = "paper";
            break;
        case (2):
            opponent.src = "IMG/scissors.jpg";
            computerChoice = "scissors";
            break;
        case (3):
            opponent.src = "IMG/lizard.jpg";
            computerChoice = "lizard";
            break;
        case (4):
            opponent.src = "IMG/spock.jpg";
            computerChoice = "spock";
            break;
    }
    switch (userChoice){
        case ("rock"):
            switch (computerChoice) {
                case "rock":
                    console.log("this works1")
                    winner.innerText = "Tie. Rocks are dumb"
                    break;
                case "paper":
                    console.log("this works2")
                    winner.innerText = "You lost : Paper covers Rock"
                    break;
                case "scissors":
                    console.log("this works3")
                    winner.innerText = "You won : Rock crushes Scissors"
                    break;
                case "lizard":
                    console.log("this works4")
                    winner.innerText = "You won : Rock crushes Lizard"
                    break;
                case ("spock"):
                    console.log("this works5")
                    winner.innerText = "You lost : Spock vaporizes Rock"
                    break;
            }
            break;
        case ("paper"):
            switch (computerChoice) {
                case ("rock"):
                    winner.innerText = "You won : Paper covers Rock";
                    break;
                case ("paper"):
                    winner.innerText = "Tie. paper cuts itself in it's confusion";
                    break;
                case ("scissors"):
                    winner.innerText = "You lost : Scissors cut Paper";
                    break;
                case ("lizard"):
                    winner.innerText = "You lost : Lizard eats Paper";
                    break;
                case ("spock"):
                    winner.innerText = "You lost : Paper disproves Spock";
                    break;
            }

            break;
        case ("scissors"):
            switch (computerChoice) {
                case ("rock"):
                    winner.innerText = "You lost : Rock crushes Scissors";
                    break;
                case ("paper"):
                    winner.innerText = "You won : Scissors cut Paper";
                    break;
                case ("scissors"):
                    winner.innerText = "Tie. Scissors grind together and lose their edge";
                    break;
                case ("lizard"):
                    winner.innerText = "You won : Scissors decapitate Lizard";
                    break;
                case ("spock"):
                    winner.innerText = "You lost : Spock smashes Scissors";
                    break;
            }

            break;
        case ("lizard"):
            switch (computerChoice) {
                case ("rock"):
                    winner.innerText = "You lost : Rock crushes Lizard";
                    break;
                case ("paper"):
                    winner.innerText = "You won : Lizard eats Paper";
                    break;
                case ("scissors"):
                    winner.innerText = "You lost : Scissors decapitate Lizard";
                    break;
                case ("lizard"):
                    winner.innerText = "Tie. Lizards get distracted and lick each others eyeballs";
                    break;
                case ("spock"):
                    winner.innerText = "You won : Lizard poisons Spock";
                    break;
            }

            break;
        case ("spock"):
            switch (computerChoice) {
                case ("rock"):
                    winner.innerText = "You won: Spock vaporizes Rock"
                    break;
                case ("paper"):
                    winner.innerText = "You lost : Paper disproves Spock"
                    break;
                case ("scissors"):
                    winner.innerText = "You won : Spock smashes Scissors"
                    break;
                case ("lizard"):
                    winner.innerText = "You lost : Lizard poisons Spock"
                    break;
                case ("spock"):
                    winner.innerText = "Spockception. Space-time-continuum is distorted a supermassive black hole rips open the fabric of space-time and ends all life as we know it, making the outcome of this game redudant"
                    break;
            }

            break;
    }
})

