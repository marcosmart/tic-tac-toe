//HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

//Game Constants
const xSymbol = "×";
const oSymbol = "○";

//Game Variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;


//Functions Game Status
const letterToSymbol = (letter) => letter === "x" ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner === "x") {
        statusDiv.innerHTML = `${letterToSymbol(winner)} is the winner!`;
    } else {
        statusDiv.innerHTML = `<span>${letterToSymbol(winner)} is the winner!</span>`;
    }
};

const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];

    //Check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add("won");
        cellDivs[1].classList.add("won");
        cellDivs[2].classList.add("won");
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
        cellDivs[3].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[5].classList.add("won");
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
        cellDivs[6].classList.add("won");
        cellDivs[7].classList.add("won");
        cellDivs[8].classList.add("won");
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
        cellDivs[0].classList.add("won");
        cellDivs[3].classList.add("won");
        cellDivs[6].classList.add("won");
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        cellDivs[1].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[7].classList.add("won");
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        cellDivs[2].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[8].classList.add("won");
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[8].classList.add("won");
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        cellDivs[2].classList.add("won");
        cellDivs[4].classList.add("won");
        cellDivs[6].classList.add("won");
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        statusDiv.innerHTML = "It's a tie!";
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`
        }
    }
};



//Event Handlers/Functions
const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    winner = null;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove("x");
        cellDiv.classList.remove("o");
        cellDiv.classList.remove("won");
    }
    gameIsLive = true;
}

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsLive || classList[2] === "x" || classList[2] === "o") {
        return;
    }

    if (xIsNext) {
        classList.add("x");
        checkGameStatus();
    } else {
        classList.add("o");
        checkGameStatus();
    }
}


//EventListeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener("click", handleCellClick)
}
