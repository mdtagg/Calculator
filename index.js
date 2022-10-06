

//Changing display by pressing number buttons
let calculationValuesArray = []
let firstNumber = []
let result = document.querySelector('.result')

const numberButtons = document.querySelectorAll('.dark-gray')

numberButtons.forEach(button => {
    button.addEventListener('click', changeDisplay)
    button.addEventListener('click', colorPress)
    button.addEventListener('transitionend', removeColorPress)
    button.addEventListener('transitioncancel', (e) => {
        e.target.classList.remove('color-press')
    })})

function colorPress(e) {
    e.target.classList.add('color-press')
}

function removeColorPress(e) {
    e.target.classList.remove('color-press')
}

function changeDisplay(e) {

    operatorButtons.forEach(button => {
        button.classList.remove('orange-color-press')
    })
   
    if(firstNumber.length >= 9) {
        return
    }

    firstNumber.push(e.target.textContent)
    result.textContent = firstNumber.join('')
    }

//operator buttons

const operatorButtons = document.querySelectorAll('.orange')
operatorButtons.forEach(button => {
    button.addEventListener('click', changeColor)
    button.addEventListener('click',getOperator)
})

function changeColor(e) {
    e.target.classList.add('orange-color-press')
}

let operatorValue = ''
function getOperator(e) {
    
    if(operatorValue === '=') {
        operatorValue = e.target.textContent
        return
    }

    calculationValuesArray.push(parseFloat(firstNumber.join('')))
    firstNumber = []

    if(e.target.textContent === '=') {
        return
    }
    else if(calculationValuesArray.length > 1) {
        calculate()
        operatorValue = e.target.textContent
    }
    else {
        operatorValue = e.target.textContent
    }}
    
//Equals button 

const equalsColorPress = document.querySelector('.equals')
equalsColorPress.addEventListener('transitionend', (e) => {
    e.target.classList.remove('orange-color-press')
})

//Calculating the values 

const calculator = document.querySelector('.equals')
calculator.addEventListener('click', calculate)

function calculate() {

    let endResult = calculationValuesArray.reduce((result,nextNumber) => {

        return operatorValue === '+' ?
        result + nextNumber :
        operatorValue === '-' ?
        result - nextNumber :
        operatorValue == 'x' ?
        result * nextNumber :
        result / nextNumber
        
        })

//check for displaying results over 9 places long

    let stringEndResult = endResult.toString().split('')

    if(stringEndResult.length > 9 && operatorValue !== '÷') {
        endResult = `${stringEndResult[0]}e${stringEndResult.length - 1}`
    } else if(stringEndResult.length > 9 && stringEndResult.includes('.')) {
        endResult = endResult.toFixed(2)
    }

    let endResultDisplay = document.querySelector('.result')
    endResultDisplay.textContent = endResult

    calculationValuesArray = [endResult]
    firstNumber = []
    operatorValue = '='
    
}

//Light gray buttons styling effects

const nonOperativeButtons = document.querySelectorAll('.light-gray')
nonOperativeButtons.forEach(button => {
    button.addEventListener('click', colorPress)
    button.addEventListener('transitionend', removeColorPress)
    })

//Clear button 

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    result.textContent = 0
    calculationValuesArray = []
    firstNumber = []
    operatorValue = ''
    operatorButtons.forEach(button => {
        button.classList.remove('orange-color-press')
    })
})

//positive-negative button 

const posNeg = document.querySelector('.pos-neg')

posNeg.addEventListener('click', () => {
    if(firstNumber.join('') > 0) {
        firstNumber.unshift('-')
        result.textContent = firstNumber.join('')
    }else if(firstNumber.join('') < 0) {
        firstNumber.shift()
        result.textContent = firstNumber.join('')
    }else if(calculationValuesArray[0] > 0 || calculationValuesArray[0] < 0) {
        calculationValuesArray[0] *= -1
        result.textContent = calculationValuesArray[0]
    }else {
        return
    }
})

// percentage button

const percentageButton = document.querySelector('.percentage')
percentageButton.addEventListener('click', () => {
    
    if(operatorValue === '=') {
        calculationValuesArray[0] *= .01
        result.textContent = calculationValuesArray[0]
        console.log(calculationValuesArray)
    }
    else if(typeof(firstNumber) === 'object') {
        firstNumber = parseFloat(firstNumber.join(''))
        firstNumber *= .01
        result.textContent = firstNumber
        firstNumber = firstNumber.toString().split('')
    }else {
        return
    }
})