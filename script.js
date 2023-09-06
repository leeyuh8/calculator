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


// UPDATE DISPLAY
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
buttons.forEach( btn => btn.addEventListener('click', displayValue));

function displayValue(e) {
    let currentValues = display.textContent;

    if (e.target.textContent === '+' 
        || e.target.textContent === '-'
        || e.target.textContent === 'x'
        || e.target.textContent === '/') {
        currentValues += ' ' + e.target.textContent + ' '
    } else {
        currentValues += e.target.textContent;
    }

    display.textContent = currentValues; 
}


// CLEAR BUTTON
const clearBtn = document.querySelector('.clear');
clearBtn.removeEventListener('click', displayValue);
clearBtn.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.textContent = '';
}


// EQUAL BUTTON
/*
- when equal button is clicked, store what's currently in the
display into a variable
- then split that string into an array that gives [num1, op, num2]
- pass these array values to operate() which will return the final answer
- store the final answer into a new variable
- update the display to show the final answer 
*/
const equalBtn = document.querySelector('.equal');
equalBtn.removeEventListener('click', displayValue);
equalBtn.addEventListener('click', evaluate);

let x;
let op;
let y;

function evaluate() {
    let expression = display.textContent;
    let expressionArr = expression.split(' ');

    x = expressionArr[0];
    op = expressionArr[1];
    y = expressionArr[2];
};