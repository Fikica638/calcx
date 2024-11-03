let expression = '';
let currentInput = '';

const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

function appendNumber(number) {
    currentInput += number;
    resultDisplay.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && expression === '') return; // Prevent starting with an operator
    expression += currentInput + operator;
    expressionDisplay.innerText = expression;
    currentInput = '';
    resultDisplay.innerText = operator;
}

function clearDisplay() {
    expression = '';
    currentInput = '';
    expressionDisplay.innerText = '';
    resultDisplay.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        expression += currentInput;
        const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        resultDisplay.innerText = result;
        expressionDisplay.innerText = expression;
        expression = '';
        currentInput = result.toString();
    } catch {
        resultDisplay.innerText = 'Error';
    }
}
