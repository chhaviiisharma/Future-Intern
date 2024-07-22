let display = document.getElementById('display');
let currentInput = '';
let lastOperator = '';
let shouldResetDisplay = false;

function clearDisplay() {
    currentInput = '';
    lastOperator = '';
    display.textContent = '0';
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    }
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && operator === '-') {
        currentInput = operator;
        display.textContent = currentInput;
        return;
    }

    if (currentInput === '' && operator !== '-') return;

    if (lastOperator !== '') {
        calculateResult();
    }

    lastOperator = operator;
    currentInput += operator;
    shouldResetDisplay = false;
    display.textContent = currentInput;
}

function calculateResult() {
    if (lastOperator === '') return;

    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        lastOperator = '';
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
        lastOperator = '';
    }

    shouldResetDisplay = true;
}
