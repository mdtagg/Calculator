const numbers = document.querySelectorAll('.dark-gray')
let results = []
console.log(results)
numbers.forEach(button => button.addEventListener('click', changeDisplay))

function changeDisplay(e) {
    console.log(e)
    results.push(e.target.textContent)
    // results.join('')
    let result = document.querySelector('.result')
    result.textContent = results.join('')

}

const operators = document.querySelectorAll('.orange')
operators.forEach(button => button.addEventListener('click', changeColor))

function changeColor(e) {
    
    operators.forEach(button => {
        const classLists = Array.from(button.classList)
        if(classLists.includes('transition')) {
            button.classList.remove('transition')
        }
        e.target.classList.add('transition');
})}


