const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#FFFF33', '#FF3300', '#9900FF', '#663399', '#00FFFF', '#33FF00', '#CC6600', '#FF6600']

for (let i = 0; i < SQUARES_NUMBER; i ++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor (el) {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    setBoardColor(color)
}

function removeColor (el) {
    el.style.backgroundColor = ''
    el.style.boxShadow = ''
    removeBoardColor()
}

function setBoardColor (color) {
    board.style.boxShadow = `0 0 100px ${color}`
}

function removeBoardColor () {
    board.style.boxShadow = ''
}

function getRandomColor () {
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}