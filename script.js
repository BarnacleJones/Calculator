//Basic math functions

const add = (a, b) => {return a+b};

const subtract = (a, b) => {return a-b};

const multiply = (a, b) => {return a*b};

const divide = (a, b) => {return a/b};

//variables and initialisation
let display = document.getElementById("currentDisplay");
let displayValue = 0;
let operator = "";
const numberArray = [];

//push # or . button - populate the display

function changeDisplay(value) {
    
    if (displayValue === 0) {
        display.innerText = value;
        displayValue = value;
    }
    else{
        if (value === ".") {
            preDecimal = display.innerText;
            displayValue = preDecimal + value;
            display.innerText = parseFloat(displayValue);
        }
        else{
            displayValue = parseFloat(displayValue + "" + value);        
            display.innerText = displayValue
        }
        }
}


//push an operator

function operation(val){
    //if there IS a stored value, run the equals function ---before setting operator again!
    if (numberArray[0] > 0 || numberArray[0] < 0) {
        
        equals();
    }
    //if there is no stored value, value on screen is array[0]
    else{
        numberArray[0] = parseFloat(displayValue)
    }
    //set the operator
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
    displayValue = 0;
}

//push =
function equals()
{
    numberArray[1] = parseFloat(displayValue);
    switch (operator) {
        case "+":
            displayValue = numberArray.reduce(add);
            display.innerText = displayValue;
            numberArray.splice(0, numberArray.length)
            numberArray[0] = displayValue;            
            break;
        case "-":
            displayValue = numberArray.reduce(subtract);
            display.innerText = displayValue;
            numberArray.splice(0, numberArray.length)
            numberArray[0] = displayValue;
            break;
        case "x":        
            displayValue = numberArray.reduce(multiply);
            display.innerText = displayValue;
            numberArray.splice(0, numberArray.length)
            numberArray[0] = displayValue;
            break;
        case "/":
            if (numberArray[1]=== 0) {
                alert("You can't divide by zero");
                break;
                }
            else{
                displayValue = numberArray.reduce(divide);
                display.innerText = displayValue;
                numberArray.splice(0, numberArray.length)
                numberArray[0] = displayValue;
                break;
                }
        default:
            alert("You have done something wrong")
            break;
        }
         
}
//push delete

//push clear

document.getElementById("clear").addEventListener("click", clear);
function clear(){
numberArray.splice(0, numberArray.length)
    displayValue = 0;
    display.innerText = 0;
   console.log(numberArray);
}



//getting strange results when
// pushing equals and then adding more operators on the value
//eg 0.5 x 5 = 2.5, pressing + makes answer 6.25