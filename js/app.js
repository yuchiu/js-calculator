let infixStack = [];
let postfixStack = [];
let currentNum = '';
let result;

function clear() {
    calculator.answer.value = '';
    calculator.process.value = '';
    infixStack = [];
    postfixStack = [];
    result = '';
    currentNum = '';
}

function displayProcess() {
    calculator.process.value = infixStack.join('') + '=';
}

//display answer on the text bar
function displayAnswer() {
    infixToPostFix();
    postfixStack[0] = Math.round(postfixStack[0] * 100) / 100;
    result = postfixStack.shift();
    if (isNum()) {
        calculator.answer.value = result;
        currentNum = result;
    } else {
        clear();
        calculator.answer.value = 'Error';
        setTimeout(() => {
            calculator.answer.value = '';
        }, 1000);
    }
}

function storeNum(val) {
    calculator.answer.value += val;
    currentNum += val;
}

function storeOperator(op) {
    if (isNum()) {
        pushCurrentNum();
        infixStack.push(op);
        if (op === '/') {

            calculator.answer.value += '÷';
        } else if (op === '*') {

            calculator.answer.value += 'x';
        } else {
            calculator.answer.value += op;
        }

    } else {
        let num = calculator.answer.value;
        num = num.split('');
        num.splice(num.length - 1, 1)
        if (op === '/') {
            num.push('÷');
        } else if (op === '*') {
            num.push('x');
        } else {
            num.push(op);
        }
        num = num.join('')
        calculator.answer.value = num;
        infixStack.pop();
        infixStack.push(op);
    }
}

//push current number into infix stack
function pushCurrentNum() {
    currentNum = parseFloat(currentNum);
    infixStack.push(currentNum);
    currentNum = '';
}
