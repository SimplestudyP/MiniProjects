let isTurnX = true;
const cells = document.querySelectorAll(".cell");
let count = 0;
let gameWin = false;
let gameDraw = false;
let elementData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winText = document.querySelector(".winText");

function handleClick(event) {
    if (count == 5 && !gameWin) {
        gameDraw = true; //gamedraw getting displayed on nextclick
        winText.textContent = "Game Draw";
    }

    if (isTurnX && event.currentTarget.textContent === '') {
        event.currentTarget.textContent = 'X';
        elementData[event.currentTarget.id] = 1;
        if (checkwin(1)) {
            gameWin = true;
            winText.textContent = "X wins";
        }
        isTurnX = false; // Switch turns
        count++;
    } else if (!isTurnX && event.currentTarget.textContent === '') {
        event.currentTarget.textContent = 'O';
        elementData[event.currentTarget.id] = 2;
        if (checkwin(2)) {
            gameWin = true;
            winText.textContent = "O wins";
        }
        isTurnX = true; // Switch turns
    }

    if (gameWin || gameDraw) {
        winText.style.visibility = 'visible';
        cells.forEach(cell => {
            cell.removeEventListener("click", handleClick);
        });
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function checkwin(n) {
    if (elementData[0] == n && elementData[1] == n && elementData[2] == n)
        return true;
    else if (elementData[3] == n && elementData[4] == n && elementData[5] == n)
        return true;
    else if (elementData[6] == n && elementData[7] == n && elementData[8] == n)
        return true;
    else if (elementData[0] == n && elementData[3] == n && elementData[6] == n)
        return true;
    else if (elementData[1] == n && elementData[4] == n && elementData[7] == n)
        return true;
    else if (elementData[2] == n && elementData[5] == n && elementData[8] == n)
        return true;
    else if (elementData[0] == n && elementData[4] == n && elementData[8] == n)
        return true;
    else if (elementData[2] == n && elementData[4] == n && elementData[6] == n)
        return true;
    else
        return false;
}
