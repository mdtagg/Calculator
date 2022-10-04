

//Changing display by pressing number buttons
let calcValue = []
let firstNumber = []

const numbers = document.querySelectorAll('.dark-gray')
numbers.forEach(button => button.addEventListener('click', changeDisplay))

function changeDisplay(e) {
    
    if(firstNumber.length >= 9) {
        return
    }
    let result = document.querySelector('.result')
    firstNumber.push(e.target.textContent)
    result.textContent = firstNumber.join('')
    }
    
    // calcValue.push(parseInt(firstNumber.join('')))


/*Changing operator button styling upon click, assigning operator value to global 
variable */

const operators = document.querySelectorAll('.orange')
operators.forEach(button => {
    button.addEventListener('click', changeColor)
    button.addEventListener('click',getOperator)
}
)

function changeColor(e) {
    
    operators.forEach(button => {
        const classLists = Array.from(button.classList)
        if(classLists.includes('transition')) {
            button.classList.remove('transition')
        }
        e.target.classList.add('transition');
})}

let operatorValue = ''
function getOperator(e) {
    if(e.target.textContent === '=') {
        calcValue.push(parseFloat(firstNumber.join('')))
        return
    }else if(calcValue.length >= 1) {
        operatorValue = e.target.textContent
        return
    }else {
        operatorValue = e.target.textContent
        calcValue.push(parseFloat(firstNumber.join('')))
        firstNumber = []
    }
    }
    
    //Calculating the values 

const calculator = document.querySelector('.equals')
calculator.addEventListener('click', calculate)


function calculate() {

    let endResult = calcValue.reduce((result,nextNumber) => {

        return operatorValue === '+' ?
        result + nextNumber :
        operatorValue === '-' ?
        result - nextNumber :
        operatorValue == 'x' ?
        result * nextNumber :
        result / nextNumber
        
        })
        // console.log(calcValue)
        // console.log(endResult)
    let stringEndResult = endResult.toString().split('')
    console.log(stringEndResult)

    if(stringEndResult.length > 9 && operatorValue !== '÷') {
        endResult = `${stringEndResult[0]}e${stringEndResult.length - 1}`
    } else if(stringEndResult.length > 9 && stringEndResult.includes('.')) {
        endResult = endResult.toFixed(7)
        console.log(endResult)
    }

    let endResultDisplay = document.querySelector('.result')
    endResultDisplay.textContent = endResult

        calcValue = []
        firstNumber = [endResult]
}

//Clear button 

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    let clearResult = document.querySelector('.result')
    clearResult.textContent = 0
    calcValue = []
    firstNumber = []
    operatorValue = ''
})
