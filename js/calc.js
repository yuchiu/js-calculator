//turning infix into postfix and then compute the answer
function infixToPostFix() {
    let numberOfOperand = infixStack.length;
    for (let i = 0; i < infixStack.length; i++) {
        if (isOperator(infixStack[i])) {
            numberOfOperand--;
        }
    }

    for (let i = 0; i < numberOfOperand; i += 1) {
        if (isOperator(infixStack[0])) {
            compute();
            postfixStack.push(result);
        } else {
            postfixStack.push(infixStack.shift());
        }
    }
}

function compute() {
    let operator = infixStack.shift();
    let num1 = postfixStack.shift();
    let num2 = infixStack.shift();

    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

function add(num1, num2) {
    result = num1 + num2;
}

function subtract(num1, num2) {
    result = num1 - num2;
}

function multiply(num1, num2) {
    result = num1 * num2;
}

function divide(num1, num2) {
    result = num1 / num2;
}


function isNum() {
    let num = calculator.answer.value.split('');
    return !isNaN(parseFloat(num[num.length - 1]));
}

function isOperator(check) {
    switch (check) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
            break;
        default:
            return false;
            break;
    }
}