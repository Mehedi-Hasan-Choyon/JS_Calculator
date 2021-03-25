var FirstNumber, SecondNumber, Operator, tempOperator, Result, flag;


function inputNumbers(command){

    var userCommand, PreNum, finalNum;

    userCommand = command.id;
    finalNum = getNumber(userCommand);
    console.log(finalNum);

    switch(tempOperator){
        case '+':
            updateLabel1(Operator);
            tempOperator = '';
            break;

        case '-':
            updateLabel1(Operator);
            tempOperator = '';
            break;

        case '*':
            updateLabel1(Operator);
            tempOperator = '';
            break;

        case '/':
            updateLabel1(Operator);
            tempOperator = '';
            break;

        case '%':
            updateLabel1(Operator);
            tempOperator = '';
            break;

        default:
            break;
    }

    if(Result !== null && flag ===1){
        document.getElementById('inputDisplay').innerHTML = '';
        flag = 0;
    }

    console.log(PreNum);
    PreNum = document.getElementById('inputDisplay').innerHTML;
    
    document.getElementById('inputDisplay').innerHTML = PreNum + finalNum;
    
}

function getOperator(Operator){
    switch(Operator){
        case '+':
            updateLabel1(Operator);
            break;

        case '-':
            updateLabel1(Operator);
            break;

        case '*':
            updateLabel1(Operator);
            break;

        case '/':
            updateLabel1(Operator);
            break;

        default:
            break;
    }
}

function getNumber(value){
    inputNav = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        'BracketOpen': '(',
        'BracketClose': ')',
        'dot': '.'
    }
    return inputNav[value]; 
}

function add(){
    Operator = '+';
    tempOperator = '+'
    FirstNumber = parseFloat(document.getElementById('inputDisplay').innerHTML);
    document.getElementById('result').innerHTML = FirstNumber;
    document.getElementById('inputDisplay').innerHTML = '+';
}

function sub(){
    Operator = '-';
    tempOperator = '-'
    FirstNumber = parseFloat(document.getElementById('inputDisplay').innerHTML);
    document.getElementById('result').innerHTML = FirstNumber;
    document.getElementById('inputDisplay').innerHTML = '-';
}

function mul(){
    Operator = '*';
    tempOperator = '*'
    FirstNumber = parseFloat(document.getElementById('inputDisplay').innerHTML);
    document.getElementById('result').innerHTML = FirstNumber;
    document.getElementById('inputDisplay').innerHTML = '*';
}

function divi(){
    Operator = '/';
    tempOperator = '/'
    FirstNumber = parseFloat(document.getElementById('inputDisplay').innerHTML);
    document.getElementById('result').innerHTML = FirstNumber;
    document.getElementById('inputDisplay').innerHTML = '/';
}

function mod(){
    Operator = '%';
    tempOperator = '%'
    FirstNumber = parseFloat(document.getElementById('inputDisplay').innerHTML);
    document.getElementById('result').innerHTML = FirstNumber;
    document.getElementById('inputDisplay').innerHTML = '%';
}

function allClear(){
    console.log('Im Mehedi');
    document.getElementById('result').innerHTML = '';
    document.getElementById('inputDisplay').innerHTML = '';
}

function calculate(){
    var firstNum
   let allNum = document.getElementById('inputDisplay').innerHTML;
   console.log(allNum);

   for(let i = 0; i !== '+', i !== '-', i !== '*', i !== '/'; i++ ){
        firstNum = firstNum + allNum[i];
   }
   console.log(firstNum);
}

function updateLabel1(value){
    let numbers = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numbers + value;
    document.getElementById('inputDisplay').innerHTML= '';
}

function existingOperation(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML = FirstNumber + Operator + '';
    flag = 0;
}

function calculate(){

    if(flag === 1){
        let tempNum = document.getElementById('inputDisplay').innerHTML;
        existingOperation(tempNum);
    }

    SecondNumber = document.getElementById('inputDisplay').innerHTML;
    updateLabel1(SecondNumber);
    
    switch(Operator){
        case '+':
            Result = parseFloat(FirstNumber) + parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            flag = 1;
            break;

        case '-':
            Result = parseFloat(FirstNumber) - parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            flag = 1;
            break;

        case '*':
            Result = parseFloat(FirstNumber) * parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            flag = 1;
            break;

        case '/':
            Result = parseFloat(FirstNumber) / parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            flag = 1;
            break;

        case '%':
            Result = parseFloat(FirstNumber) % parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            flag = tru1e;
            break;

        default:
            break;
    }
}
