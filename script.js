// computer choices a random index from the array. Math.random() retuns a random # from 0-1. Math.floor allows us to get # from 0-2.
const computer = ['ROCK', 'PAPER', 'SCISSORS'];
function compChoice() {
    let number = Math.floor(Math.random() * 3);
    return computer[number];
}

// letting the score start at 0
let ppoints = 0;
let cpoints = 0;
let ties = 0;

function userInput() {
    //Get value from input
    const input = document.getElementById("user").value.toUpperCase(); // changes player input into uppercase
    const cinput = compChoice(); // calls function into cinput
    let result = "";

    // Sets the element text to what the player/computer inputs.
    document.getElementById("ptext").innerText = input;
    document.getElementById("ctext").innerText = cinput;

    //Check if user input is rock
    if (input == "ROCK") {

        if (cinput == "ROCK") {
            document.getElementById("res").innerText = "Tie Game 🤝🏽";
            ties++;
            document.getElementById("ties").innerText = ties;
            return;
        }

        if (cinput == "PAPER") {
            document.getElementById("res").innerText = "🤖 Computer Wins 🎉";
            cpoints++;
            document.getElementById("cpoints").innerText = cpoints;
            return;

        }

        if (cinput == "SCISSORS") {
            document.getElementById("res").innerText = " 🧍 Player Wins 🎉";
            ppoints++;
            document.getElementById("ppoints").innerText = ppoints;
            return;
        }


    }

    //Check if user input is paper
    if (input == "PAPER") {

        if (cinput == "ROCK") {
            document.getElementById("res").innerText = "🧍 Player Wins 🎉";
            ppoints++;
            document.getElementById("ppoints").innerText = ppoints;
            return;
        }

        if (cinput == "PAPER") {
            document.getElementById("res").innerText = "TIE GAME 🤝🏽";
            ties++;
            document.getElementById("ties").innerText = ties;
            return;

        }

        if (cinput == "SCISSORS") {
            document.getElementById("res").innerText = "🤖 Computer Wins 🎉";
            cpoints++;
            document.getElementById("cpoints").innerText = cpoints;
            return;
        }


    }
    //Check if user input is scissors
    if (input == "SCISSORS") {

        if (cinput == "ROCK") {
            document.getElementById("res").innerText = "🤖 Computer Wins 🎉";
            cpoints++;
            document.getElementById("cpoints").innerText = cpoints;
            return;
        }

        if (cinput == "PAPER") {
            document.getElementById("res").innerText = "🧍 Player Wins 🎉";
            ppoints++;
            document.getElementById("ppoints").innerText = ppoints;
            return;

        }

        if (cinput == "SCISSORS") {
            document.getElementById("res").innerText = "TIE GAME 🤝🏽";
            ties++;
            document.getElementById("ties").innerText = ties;
            return;
        }


    }

    //else input value is not valid return error
    alert("Please input rock, paper, or scissors");
    return true;
}

// Sets the score to 0 
function reset() {
    cpoints = 0;
    ppoints = 0;
    ties = 0;
    document.getElementById("ppoints").innerText = 0;
    document.getElementById("cpoints").innerText = 0;
    document.getElementById("ties").innerText = 0;
    return;
}
