document.addEventListener('DOMContentLoaded', () => {
    gridInit()
})

const gridContainer = document.querySelector('.gridContainer')

function gridInit() {
    
    for (let i =0 ; i < 16 ; i ++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        gridContainer.appendChild(cell)
    }
}