// script.js
let displayElement = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    displayElement.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    displayElement.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        displayElement.innerText = currentInput;
    } catch (error) {
        displayElement.innerText = 'Error';
    }
}
