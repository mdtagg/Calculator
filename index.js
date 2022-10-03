const buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click', changeDisplay))

function changeDisplay(e) {
    console.log(e)
    let result = document.querySelector('.result')
    result.textContent = e.target.textContent
}