
//Changing display by pressing number buttons
let calcValue = []
let firstNumber = []

const numbers = document.querySelectorAll('.dark-gray')
numbers.forEach(button => button.addEventListener('click', changeDisplay))

function changeDisplay(e) {
    
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
        return
    }else {
        operatorValue = e.target.textContent
        calcValue.push(parseInt(firstNumber.join('')))
        console.log(calcValue)
        firstNumber = []
    }
    }

    //Calculating the values 

const calculator = document.querySelector('.equals')
calculator.addEventListener('click', calculate)

function calculate() {
    calcValue.push(parseInt(firstNumber.join('')))

    const endResult = calcValue.reduce((result,nextNumber) => {
        return operatorValue === '+' ?
        result + nextNumber :
        operatorValue === '-' ?
        result - nextNumber :
        operatorValue == 'x' ?
        result * nextNumber :
        operatorValue === '÷'
        })

    


    let endResultDisplay = document.querySelector('.result')
    endResultDisplay.textContent = endResult
}

