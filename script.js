// MATH FUNCTIONS
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


// CALCULATOR OPERATION VARIABLES
let x;
let op;
let y;


// OPERATION
function operate(n1, operator, n2) {
    switch(operator) {
        case '+':
            return add(n1, n2);
            break;
        case '-':
            return subtract(n1, n2);
            break;
        case '*':
            return multiply(n1, n2);
            break;
        case '/':
            return divide(n1, n2);
    }
}


// DISPLAY
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
buttons.forEach( btn => btn.addEventListener('click', displayValue));

function displayValue(e) {
    let currentValues = display.textContent;
    currentValues += e.target.textContent;
    display.textContent = currentValues;
}


// CLEAR BUTTON
const clearBtn = document.querySelector('.clear');
clearBtn.removeEventListener('click', displayValue);
clearBtn.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.textContent = '';
}