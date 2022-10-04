

//Changing display by pressing number buttons
let calcValue = []
let firstNumber = []

// console.log(firstNumber)
console.log(calcValue)

const numbers = document.querySelectorAll('.dark-gray')
numbers.forEach(button => {
    button.addEventListener('click', changeDisplay)
    button.addEventListener('click', colorPress)
    button.addEventListener('transitionend', (e) => {
        e.target.classList.remove('color-press')
    })
})

function colorPress(e) {
    e.target.classList.add('color-press')
}

function changeDisplay(e) {

    operators.forEach(button => {
        button.classList.remove('transition')
    })
   
    if(firstNumber.length >= 9) {
        return
    }

    let result = document.querySelector('.result')
    firstNumber.push(e.target.textContent)
    result.textContent = firstNumber.join('')
    }

/*Changing operator button styling upon click, assigning operator value to global 
variable */

const operators = document.querySelectorAll('.orange')
operators.forEach(button => {
    button.addEventListener('click', changeColor)
    button.addEventListener('click',getOperator)
}
)

function changeColor(e) {
    e.target.classList.add('transition')
}

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
    
    //Equals button styling effects

    const equalsColorPress = document.querySelector('.equals')
    equalsColorPress.addEventListener('transitionend', (e) => {
        e.target.classList.remove('transition')
    })


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

    let stringEndResult = endResult.toString().split('')
    console.log(stringEndResult)

    if(stringEndResult.length > 9 && operatorValue !== '÷') {
        endResult = `${stringEndResult[0]}e${stringEndResult.length - 1}`
    } else if(stringEndResult.length > 9 && stringEndResult.includes('.')) {
        endResult = endResult.toFixed(2)
    }

    let endResultDisplay = document.querySelector('.result')
    endResultDisplay.textContent = endResult

        calcValue = []
        firstNumber = [endResult]

        // console.log(firstNumber)
        // console.log(calcValue)
}

//Light gray buttons styling effects

const nonOperativeButtons = document.querySelectorAll('.light-gray')
nonOperativeButtons.forEach(button => {
    button.addEventListener('click', colorPress)
    button.addEventListener('transitionend', (e) => {
        e.target.classList.remove('color-press')
    })
})

//Clear button 

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    let clearResult = document.querySelector('.result')
    clearResult.textContent = 0
    calcValue = []
    firstNumber = []
    operatorValue = ''
    operators.forEach(button => {
        button.classList.remove('transition')
    })
})

//positive-negative button 

const posNeg = document.querySelector('.pos-neg')
const displayChange = document.querySelector('.result')
posNeg.addEventListener('click', () => {
    if(firstNumber.join('') > 0) {
        firstNumber.unshift('-')
        displayChange.textContent = firstNumber.join('')
    }else if(firstNumber.join('') < 0) {
        firstNumber.shift()
        displayChange.textContent = firstNumber.join('')
    }else {
        return
    }
})

// percentage button

const percentageButton = document.querySelector('.percentage')
percentageButton.addEventListener('click', () => {
    if(firstNumber.join('') !== 0) {
        firstNumber[0] = firstNumber.join('') * .01
        displayChange.textContent = firstNumber
    } else {
        return
    }
})