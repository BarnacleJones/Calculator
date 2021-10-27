//Basic math functions

const add = (a, b) => {return a+b};

const subtract = (a, b) => {return a-b};

const multiply = (a, b) => {return a*b};

const divide = (a, b) => {return a/b};

//variables and initialisation

let display = document.getElementById("currentDisplay");
let displayValue = 0;
const numberArray = [];
let operator = "";
let answer = 0;
let isfloat = false;

// functions to populate display with number pressed
//store value as variable - displayValue
function changeDisplay(value) {
    if (value === '.') {

        //cant get decimals working if displayvalue is not 0
        isfloat = true;
        displayValue = parseFloat(displayValue + ".");     
        display.innerText = displayValue
        // display.innerText = parseFloat(displayValue + ".");
    }
    if (displayValue === 0) {
        display.innerText = value;
        displayValue += value;
    }
    else{
        displayValue = parseFloat(displayValue + "" + value);        
        display.innerText = displayValue}
    }

//function to assign value to operator
function operation(val){
    switch (val) {
        case "+":
        operator = "+";
        break;

        case "-":
        operator = "-";
        break;

        case "x":
        operator = "x";
        break;

        case "/":
        operator = "/";
        break;
    }
    //if there is already a number in the array[0]
    //total it with whatever operator selected
    if (numberArray[0] > 0 || numberArray[0] < 0) 
    {   
        equals()}
    //otherwise make the displayValue array[0]
    else{numberArray[0] = displayValue; }
    //assign operator value
    //reset display value
    displayValue = 0;
}

//function that runs when equals is pressed
function equals(){
    //different case depending on operator
switch (operator) {
    case "+":
        numberArray[1] = displayValue;
        answer = numberArray.reduce(add);
        display.innerText = answer;
        numberArray.splice(0, numberArray.length)
        numberArray[0] = answer;
        
        break;
    case "-":
        numberArray[1] = displayValue;
        answer = numberArray.reduce(subtract);
        display.innerText = answer;
        numberArray.splice(0, numberArray.length)
        numberArray[0] = answer;
        
        break;
    case "x":        
        numberArray[1] = displayValue;
        answer = numberArray.reduce(multiply);
        // if (isfloat) {
        //     display.innerText = answer.toFixed(2);
        // }
        // else{display.innerText = answer;}
        display.innerText = answer;
        numberArray.splice(0, numberArray.length)
        numberArray[0] = answer;
        console.log(numberArray)
        
        
        break;
    case "/":
        if (displayValue === 0) {
            alert("You can't divide by zero");
            break;
            }
        else{
            numberArray[1] = displayValue;
            answer = numberArray.reduce(divide);
            // if (isfloat) {
            //     display.innerText = answer.toFixed(2);
            // }
            // else{display.innerText = answer;}
            display.innerText = answer.toFixed(2)
            numberArray.splice(0, numberArray.length)
            numberArray[0] = answer;
            break;
            }
    default:
        alert("You have done something wrong")
        break;
    }
    displayValue = 0;
    
}

//clear function
document.getElementById("clear").addEventListener("click", clear);
function clear(){
numberArray.splice(0, numberArray.length)
    displayValue = 0;
    display.innerText = 0;
    isfloat = false;
    console.log(numberArray);
}
