
let numSquares = 6;
let rgbVals = generateSquareColor(numSquares);
let difficulty = "hard";
let display = document.querySelector("#display");
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let modeButtons = document.querySelectorAll(".mode");

h1.textContent = rgbVals[getRandomInt(rgbVals.length)];

generateSquares();
makeChoice();


for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        if(modeButtons[i].textContent.toLowerCase() === "easy") {
            numSquares = 3;
            difficulty = "easy";
            for(let i =  3; i <= 5; i++) {
                squares[i].style.background="#343a40";
            }
        } else if(modeButtons[i].textContent.toLowerCase() === "hard") {
            numSquares = 6;
            difficulty = "hard";
        }
        rgbVals = generateSquareColor(numSquares);
        h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
        generateSquares(numSquares);
        display.textContent = "";
    });
}

let resetButton = document.querySelector("#new");
resetButton.addEventListener("click", function() {
    reset();
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateSquareColor(numColors) {
    let colors = [];
    for(let i = 0; i < numColors; i++) {
        let rgbString = "rgb(" + getRandomInt(256) + ", " + getRandomInt(256) + ", " + getRandomInt(256) + ")";
        colors.push(rgbString);
    }
    return colors;
}

function generateSquares(numSquares) {
    for(let i = 0; i < 6; i++) {
        squares[i].style.backgroundColor = rgbVals[i];
    }
}

function makeChoice() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if(squares[i].style.backgroundColor === h1.textContent) {
                display.textContent = "Correct";
            }
            else {
                display.textContent = "Try Again";
                this.style.backgroundColor = "#343a40"
            }
        });
    }
}

function reset() {
    rgbVals = generateSquareColor(numSquares);
    h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
    generateSquares(numSquares);
    display.textContent = "";
}
