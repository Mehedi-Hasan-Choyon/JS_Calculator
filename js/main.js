var FirstNumber, SecondNumber, Operator, tempOperator, Result;


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

        default:
            break;
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

function calculate(){
    SecondNumber = document.getElementById('inputDisplay').innerHTML;
    updateLabel1(SecondNumber);
    
    switch(Operator){
        case '+':
            Result = parseFloat(FirstNumber) + parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            break;

        case '-':
            Result = parseFloat(FirstNumber) - parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            break;

        case '*':
            Result = parseFloat(FirstNumber) * parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            break;

        case '/':
            Result = parseFloat(FirstNumber) / parseFloat(SecondNumber);
            document.getElementById('inputDisplay').innerHTML = Result;
            break;

        default:
            break;
    }
}