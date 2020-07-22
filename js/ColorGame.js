
let rgbVals = generateRGB(6);
let difficulty = "hard";

let h1 = document.querySelector("h1");
h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
let squares = document.querySelectorAll(".square");
generateSquares();
makeChoice();



let easyButton = document.querySelector("#easy");
easyButton.addEventListener("click", function() {
    rgbVals = generateRGB(3);
    h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
    generateSquares();
    for(let i=  3; i <=5; i++) {
        squares[i].style.background="#343a40";
    }
    difficulty = "easy";
    display.textContent = "";
});

let hardButton = document.querySelector("#hard");
hardButton.addEventListener("click", function() {
    rgbVals = generateRGB(6);
    h1.textContent = rgbVals[getRandomInt(rgbVals.length)];
    generateSquares();
    difficulty = "hard";
    display.textContent = "";
});

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
        let red = getRandomInt(256);
        let green = getRandomInt(256);
        let blue = getRandomInt(256);

        let rgbString = "rgb(" + red + ", " + green + ", " + blue + ")";
        colors.push(rgbString);
    }
    return colors;
}


function generateSquares() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = rgbVals[i];
    }
}

let display = document.querySelector("#display");

function makeChoice() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if(squares[i].style.background === h1.textContent) {
                display.textContent = "Correct";
            }
            else {
                display.textContent = "Try Again";
            }
        });
    }
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
