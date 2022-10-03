const numbers = document.querySelectorAll('.dark-gray')
numbers.forEach(button => button.addEventListener('click', changeDisplay))

function changeDisplay(e) {
    console.log(e)
    let result = document.querySelector('.result')
    result.textContent = e.target.textContent
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
