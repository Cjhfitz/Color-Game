
let numSquares = 6;
let rgbVals = generateRGB(numSquares);
let difficulty = "hard";
let display = document.querySelector("#display");

let h1 = document.querySelector("h1");
h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
let squares = document.querySelectorAll(".square");
generateSquares();
makeChoice();

let modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        if(modeButtons[i].textContent.toLowerCase() === "easy") {
            numSquares = 3;
            difficulty = "easy";
        } else if(modeButtons[i].textContent.toLowerCase() === "hard") {
            numSquares = 6;
            difficulty = "hard";
        }
        rgbVals = generateRGB(numSquares);
        h1.textContent = rgbVals[getRandomInt(rgbVals.length)];

    });
}

// let easyButton = document.querySelector("#easy");
// easyButton.addEventListener("click", function() {
//     rgbVals = generateRGB(3);
//     h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
//     generateSquares();
//     for(let i=  3; i <=5; i++) {
//         squares[i].style.background="#343a40";
//     }
//     difficulty = "easy";
//     display.textContent = "";
// });

// let hardButton = document.querySelector("#hard");
// hardButton.addEventListener("click", function() {
//     rgbVals = generateRGB(6);
//     h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
//     generateSquares();
//     difficulty = "hard";
//     display.textContent = "";
// });

let newButton = document.querySelector("#new");
newButton.addEventListener("click", function() {
    if(difficulty === "easy") {
        easyDifficulty()
    } else if(difficulty === "hard") {
        hardDifficulty();
    }
    display.textContent = "";
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateRGB(numColors) {
    let colors = [];
    for(let i = 0; i < numColors; i++) {
        let rgbString = "rgb(" + getRandomInt(256) + ", " + getRandomInt(256) + ", " + getRandomInt(256) + ")";
        colors.push(rgbString);
    }
    return colors;
}


function generateSquares() {
    for(let i = 0; i < squares.length; i++) {
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

function mode() {

}

function hardDifficulty() {
    rgbVals = generateRGB(6);
    h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
    generateSquares();
}

function easyDifficulty() {
    rgbVals = generateRGB(3);
    h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
    generateSquares();
}
