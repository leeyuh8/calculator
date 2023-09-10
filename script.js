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
const operatorBtn = document.querySelectorAll('.op');
operatorBtn.forEach( btn => btn.addEventListener('click', displayValue));
const pointBtn = document.querySelector('.point');
pointBtn.addEventListener('click', displayValue);
const signBtn = document.querySelector('.sign');
signBtn.addEventListener('click', displayValue);

const numbers = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['+', '-', 'x', '/'];

function displayValue(e) { 
    // actions if equal was just clicked
    if (equalClicked === true 
        && (numbers.includes(e.target.textContent)
        || e.target.textContent === '+/-'
        || e.target.textContent === '.')) {
        display.textContent = '';
        equalClicked = false;
    } else if (equalClicked === true && ops.includes(e.target.textContent)) {
        equalClicked = false;
    };

    // actions if user inputs expression greater than 2 terms
    if ( (display.textContent.indexOf(' + ') > -1
         || display.textContent.indexOf(' - ') > -1
         || display.textContent.indexOf(' x ') > -1
         || display.textContent.indexOf(' / ') > -1)
        && ops.includes(e.target.textContent)) {
        evaluateExpression();
    };

    // actions to display value for operator, point, sign, and numbers
    let currentValues = display.textContent;
    if (ops.includes(e.target.textContent)) {
        currentValues += ' ' + e.target.textContent + ' '
    } else if (e.target.textContent === '.' 
        && (currentValues.charAt(currentValues.length - 1) === '' 
        || currentValues.charAt(currentValues.length - 1) === ' ')) {
            currentValues += '0.';
    } else if (e.target.textContent === '+/-') {
        let arr = currentValues.split(' ');
        if (arr[arr.length - 1].includes('-')) {
            arr[arr.length - 1] = arr[arr.length - 1].slice(1);
        } else {
            arr[arr.length - 1] = '-' + arr[arr.length - 1].slice(0);
        }
        currentValues = arr.join(' ');
    } else {
        currentValues += e.target.textContent;
    };
    display.textContent = currentValues; 
}


// CLEAR BUTTON
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearData);

function clearData() {
    display.textContent = '';
    x = undefined;
    op = undefined;
    y = undefined;
    equalClicked = false;
}


// EQUAL BUTTON
const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', evaluateExpression);
equalBtn.addEventListener('click', toggleEqualClicked);

let x;
let op;
let y;
let equalClicked = false;

function getExpressionParts() {
    let expressionArr = display.textContent.split(' ');

    x = expressionArr[0];
    op = expressionArr[1];
    y = expressionArr[2];
};

function displayAnswer(text) {
    display.textContent = '';
    display.textContent = `${text}`;
}

function toggleEqualClicked() {
    equalClicked = true;
}

function evaluateExpression() {
    getExpressionParts();

    let answer;
    if (x === '' || op === '' || y === ''
       || x === undefined || op === undefined || y === undefined) {
        answer = 'invalid expression';
    } else {
        answer = operate(+x, op, +y);
    }
    
    displayAnswer(answer);
}


