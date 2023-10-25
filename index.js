document.addEventListener('DOMContentLoaded', () => {
    gridInit();
});

const gridContainer = document.querySelector('.gridContainer');

function gridInit() {
    const board = [];
    for (let i = 0; i < 4; i++) {
        board.push([]);
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }
    }
}