const gridContainer = document.querySelector('.gridContainer');


document.addEventListener('DOMContentLoaded', () => {
    gridInit();
    

});


let currentPlayer = 'red'
const board = [];
function gridInit() {
    for (let i = 0; i < 4; i++) {
        board.push([]);
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
            console.log(board)
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
            cell.addEventListener('click', () => {
                   // checkWin()
                if (board[i][j] === 0) {
                    board[i][j] = currentPlayer
                    cell.style.backgroundColor = currentPlayer
                    currentPlayer = currentPlayer === 'red' ? 'blue' : 'red'
                }
            });
        }
    }
}

function checkWin () {
    let counter = 0
    for (let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; i++) {
        console.log(board[i][j])
        if (board[i][j].backgroundColor === currentPlayer) {
            counter++
        } else {
            counter = 0
        }
        console.log(counter)
      }
      
    }
}
