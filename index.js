
/* Issue to fix: The operator buttons, works for first two operations but when 
I press an operator button after pressing equals, and getting the result,
the operator button adds the value in firstNumber before i can type in 
the next number which causes an array of three numbers instead of two*/



//Changing display by pressing number buttons
let calcValue = []
let firstNumber = []

const numbers = document.querySelectorAll('.dark-gray')
numbers.forEach(button => button.addEventListener('click', changeDisplay))

function changeDisplay(e) {
    
    let result = document.querySelector('.result')
    firstNumber.push(e.target.textContent)
    result.textContent = firstNumber.join('')
    // calcValue.push(parseInt(firstNumber.join('')))
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
console.log(operatorValue)
function getOperator(e) {
    if(e.target.textContent === '=') {
        // calcValue.push(parseInt(firstNumber.join('')))
        return
    }else {
        operatorValue = e.target.textContent
        calcValue.push(parseInt(firstNumber.join('')))
        // console.log(calcValue)
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
        result / nextNumber
        
        })
        console.log(calcValue)
        console.log(endResult)

    let endResultDisplay = document.querySelector('.result')
    endResultDisplay.textContent = endResult

        calcValue = []
        calcValue[0] = endResult
        
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
