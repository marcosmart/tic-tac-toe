//HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

//Game Variables
let gameIsLive = true;
let xIsNext = true;

//Event Handlers/Functions
const handleReset = (e) => {
    console.log(e);
}

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if (xIsNext) {
        classList.add("x");
        xIsNext = !xIsNext;
    } else {
        classList.add("o");
        xIsNext = !xIsNext;
    }
}


//EventListeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener("click", handleCellClick)
}
