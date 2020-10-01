//HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

//Game Variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;


//Functions Game Status
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
        gameIsLive = false;
        winner = topLeft;
        statusDiv.innerHTML = `${topLeft} is the winner!`
    }
}



//Event Handlers/Functions
const handleReset = (e) => {
    console.log(e);
}

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if (classList[2] === "x" || classList[2] === "o") {
        return;
    }

    if (xIsNext) {
        classList.add("x");
        checkGameStatus();

        xIsNext = !xIsNext;
    } else {
        classList.add("o");
        checkGameStatus();
        xIsNext = !xIsNext;
    }
}


//EventListeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener("click", handleCellClick)
}
