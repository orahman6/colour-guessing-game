var numCircles = 6;
var colours = [];
var pickedColor;
let defaultColour = "#582c99";

var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var resetButton = document.getElementById("restart");

init();

function init() {
    reset();
    colourToGuess.textContent = pickedColor;
}

function reset() {
    colours = genRandomColours(numCircles);
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    resultMessage.textContent = "";
    resetButton.textContent = "Restart";
    
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
        circles[i].addEventListener("click", clickCircle);
    }
}

function clickCircle() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        resultMessage.textContent = "You Win!";
        resetButton.textContent = "Play Again";
        changeColours(clickedColor);
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try Again";
    }
}

function changeColours(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
    document.querySelector("h1").style.backgroundColor = color;
}

function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function genRandomColours(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColour());
    }
    return arr;
}

function chooseColor() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

resetButton.addEventListener("click", reset);
