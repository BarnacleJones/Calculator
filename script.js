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

// functions to populate display with number pressed
//store value as variable - displayValue
function changeDisplay(value) {
    if (displayValue === 0) {
        display.innerText = value;
        displayValue += value;
    }
    else{
        displayValue = parseInt(displayValue + "" + value);
        // displayValue = answer;
        display.innerText = displayValue}
    }


//function to assign value to operator
function operation(val){
    //if there is already a number in the array[0], just assign operator
    if (numberArray[0] > 0 || numberArray[0] < 0) {console.log(answer);}
    //otherwise make the displayValue array[0]
    else{numberArray[0] = displayValue; }
    //assign operator value
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
        display.innerText = answer;
        numberArray.splice(0, numberArray.length)
        numberArray[0] = answer;
        break;
    case "/":
        if (displayValue === 0) {
            alert("You can't divide by zero");
            break;
            }
        else{
            numberArray[1] = displayValue;
            answer = numberArray.reduce(divide);
            display.innerText = answer;
            numberArray.splice(0, numberArray.length)
            numberArray[0] = answer;
            break;
            }
    default:
        alert("You have done something wrong")
        break;
    }
    displayValue = 0;
    console.log(numberArray)
}

//clear function
document.getElementById("clear").addEventListener("click", clear);
function clear(){
numberArray.splice(0, numberArray.length)
    displayValue = 0;
    display.innerText = 0;
    console.log(numberArray)
}