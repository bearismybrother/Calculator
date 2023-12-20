let displayScreen = document.querySelector('.result')

function changeDisplay(a){
    displayScreen.textContent = a; 
}

let num1;
let operator
let num2;
let output; 

//numbers
const numberButtons = document.querySelectorAll('.number-btn')

let chosenValue;

let arrayOfNumbers = []; 

numberButtons.forEach(bt => {
    bt.addEventListener('click', (e)=>{
        arrayOfNumbers.push(e.target.innerHTML);
        evalChosenValue();
        changeDisplay(chosenValue);
    })
})

function evalChosenValue(){
   // chosenValue = arrayOfNumbers.reduce((accumulator, currentValue) => (accumulator*10) + parseInt(currentValue),0);
    chosenValue = parseFloat(arrayOfNumbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0))
}

function resetNumber(){
    arrayOfNumbers = [];
}


//operators
let hasChosenOperator = false; 
const operatorButtons = document.querySelectorAll('.operator-btn')

operatorButtons.forEach(bt => {
    bt.addEventListener('click', (e)=>{
        if (!hasChosenOperator) {
            num1 = chosenValue;
        }
        else {
            num2 = chosenValue; 

            switch (operator){
                case '+':
                    num1 = add(num1, num2); 
                    break;
                case '-':
                    num1 = subtract(num1, num2);
                    break; 
                case 'x':
                    num1 = multiply(num1, num2);
                    break; 
                case '%':
                    num1 = divide(num1, num2);
                    break;     
            }
            changeDisplay(num1);
        }
    
        operator = e.target.innerHTML; 
        hasChosenOperator = true; 
        if (operator == '=')
        {
            hasChosenOperator = false;
            chosenValue = num1;  
        }
        resetNumber();
    })
})

function add(a,b){
    return (parseFloat(a) + parseFloat(b));
}

function subtract(a,b){
    return (parseFloat(a) - parseFloat(b));
}

function multiply(a,b){
    return (parseFloat(a) * parseFloat(b));
}

function divide(a,b){
    if (b!=0)
        return (parseFloat(a) / parseFloat(b)).toFixed(6);
    else
        return "Infinite"
}

//function buttons 
let action;

const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(bt => {
    bt.addEventListener('click', (e)=>{
        action = e.target.innerHTML;
        switch (action){
            case 'Clear':
                Clear();
                break;
            case 'Delete':
                Delete();
                break; 
        }
    })
})

function Clear(){
    hasChosenOperator= false; 
    resetNumber();
    changeDisplay(0);
}

function Delete(){
    if (arrayOfNumbers)
    {
        arrayOfNumbers.pop();
    }
    evalChosenValue();
}


const allBtns = document.querySelectorAll("div.flexContainer button")
allBtns.forEach(bt => {
    bt.addEventListener('click', (e)=>{
        allBtns.forEach(bt => {
            bt.classList.remove('button-highlight');
        })
        e.target.classList.add('button-highlight');
    })
})