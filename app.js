let infixStack = [];
let postfixStack = [];
let currentNum = '';
let result;

$('#0').click(() => {
    calculator.answer.value += '0';
    currentNum += 0;

});
$('#1').click(() => {
    calculator.answer.value += '1';
    currentNum += 1;

});
$('#2').click(() => {
    calculator.answer.value += '2';
    currentNum += 2;

});
$('#3').click(() => {
    calculator.answer.value += '3';
    currentNum += 3;

});
$('#4').click(() => {
    calculator.answer.value += '4';
    currentNum += 4;

});
$('#5').click(() => {
    calculator.answer.value += '5';
    currentNum += 5;

});
$('#6').click(() => {
    calculator.answer.value += '6';
    currentNum += 6;
});
$('#7').click(() => {
    calculator.answer.value += '7';
    currentNum += 7;

});
$('#8').click(() => {
    calculator.answer.value += '8';
    currentNum += 8;

});
$('#9').click(() => {
    calculator.answer.value += '9';
    currentNum += 9;

});
$('#decimal').click(() => {
    calculator.answer.value += '.';
    currentNum += '.';

});
$('#plus').click(() => {
    calculator.answer.value += '+';
    pushCurrentNum();
    infixStack.push('+');

});
$('#minus').click(() => {
    calculator.answer.value += '-';
    pushCurrentNum();
    infixStack.push('-');

});
$('#multiply').click(() => {
    calculator.answer.value += 'x';
    pushCurrentNum();
    infixStack.push('*');

});
$('#divide').click(() => {
    calculator.answer.value += '÷';
    pushCurrentNum();
    infixStack.push('/');

});

$('#clear').click(() => {
    calculator.answer.value = '';
    infixStack = [];
    postfixStack = [];
    result = '';
    currentNum = '';
    console.log("infix: " + infixStack + "postfix: " + postfixStack + "result: " + result)

});

$('#equal').click(() => {
    //push in the current number into infix stack
    pushCurrentNum();
    console.log('clicked equal, start to compute now, the stack is: ' + infixStack);
    //start turning infix into postfix and compute the answer
    let numberOfOperand = infixStack.length;
    for (let i = 0; i < infixStack.length; i++) {
        if (isOperator(infixStack[i])) {
            numberOfOperand--;
        }
    }
    infixToPostFix(numberOfOperand);

    //display answer on the text bar
    postfixStack[0] = Math.round(postfixStack[0] * 100) / 100;
    result = postfixStack.shift();
    calculator.answer.value = result;
    currentNum = result;
});

//push in the current number into infix stack
function pushCurrentNum() {
    //parse the string of num to int data type
    currentNum = parseFloat(currentNum);
    infixStack.push(currentNum);
    //clear the currentNum
    currentNum = '';
}


function infixToPostFix(numberOfOperand) {
    for (let i = 0; i < numberOfOperand; i += 1) {



        //call isOperator function to check if the current element is an operator
        if (isOperator(infixStack[0])) {
            console.log('operator: ' + infixStack[0]);
            compute();
            postfixStack.push(result);
            console.log('infix: ' + infixStack + 'postfix: ' + postfixStack);


        }
        //perform the following if it's operand
        else {
            console.log('number: ' + infixStack[0]);
            postfixStack.push(infixStack.shift());
            console.log('infix: ' + infixStack + 'postfix: ' + postfixStack);
        }

    }
}

function compute() {
    let operator = infixStack.shift();
    let num1 = postfixStack.shift();
    let num2 = infixStack.shift();

    //operator = current first element on the stack, which is operator
    //num1 = the number in the postfix stack
    //num2 = the number after the operator
    console.log('inside compute function, operator: ' + operator + ' num1: ' + num1 + ' num2: ' + num2);


    //determine which computional function to use
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

//check if the element in stack is operator, return true if it is
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