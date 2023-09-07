// MATH FUNCTIONS
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}


// OPERATION
function operate(n1, operator, n2) {
    switch(operator) {
        case '+':
            return add(n1, n2);
            break;
        case '-':
            return subtract(n1, n2);
            break;
        case 'x':
            return multiply(n1, n2);
            break;
        case '/':
            return divide(n1, n2);
    }
}


// NUMBER  & OPERATOR BUTTONS
const display = document.querySelector('.display');

const numberBtn = document.querySelectorAll('.num');
numberBtn.forEach( btn => btn.addEventListener('click', displayValue));
const operatorBtn = document.querySelectorAll('.operators > *');
operatorBtn.forEach( btn => btn.addEventListener('click', displayValue));

const numbers = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['+', '-', 'x', '/'];

function displayValue(e) {
    // actions following equal begin clicked
    if (equalClicked === true && numbers.includes(e.target.textContent)) {
        display.textContent = '';
        equalClicked = false;
    } else if (equalClicked === true && ops.includes(e.target.textContent)) {
        equalClicked = false;
    }

    // actions to display value
    let currentValues = display.textContent;
    if (ops.includes(e.target.textContent)) {
        currentValues += ' ' + e.target.textContent + ' '
    } else {
        currentValues += e.target.textContent;
    }
    display.textContent = currentValues; 
}


// CLEAR BUTTON
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.textContent = '';
}


// EQUAL BUTTON
const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', evaluateExpression);

let x;
let op;
let y;
let equalClicked = false;

function getExpressionParts() {
    let expression = display.textContent;
    let expressionArr = expression.split(' ');

    x = +expressionArr[0];
    op = expressionArr[1];
    y = +expressionArr[2];
};

function displayAnswer(text) {
    display.textContent = '';
    display.textContent = `${text}`;
}


function evaluateExpression() {
    equalClicked = true;
    
    getExpressionParts();
    let answer = operate(x, op, y);
    displayAnswer(answer);
}


