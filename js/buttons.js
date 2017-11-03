$('#0').click(() => {
    storeNum('0');
});

$('#1').click(() => {
    storeNum('1');
});

$('#2').click(() => {
    storeNum('2');
});

$('#3').click(() => {
    storeNum('3');
});

$('#4').click(() => {
    storeNum('4');
});

$('#5').click(() => {
    storeNum('5');
});

$('#6').click(() => {
    storeNum('6');
});

$('#7').click(() => {
    storeNum('7');
});

$('#8').click(() => {
    storeNum('8');
});
$('#9').click(() => {
    storeNum('9');
});

$('#decimal').click(() => {
    storeNum('.');
});

$('#plus').click(() => {
    storeOperator('+');
});

$('#minus').click(() => {
    storeOperator('-');
});

$('#multiply').click(() => {
    storeOperator('*');
});

$('#divide').click(() => {
    storeOperator('/');
});

$('#clear').click(() => {
    clear();
});

$('#equal').click(() => {
    pushCurrentNum();
    displayProcess();
    displayAnswer();
});