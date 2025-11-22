function gridMaker() {
    let noOfRows;
    do {
        noOfRows = prompt("enter no. of grid between 1 to 100", 50);
    }
    while (!(noOfRows <= 100 && noOfRows >= 1))

    const allGridRow = document.querySelector("#grids");
    for (let i = 1; i <= noOfRows; i++) {
        //make container
        const containerForGridRow = document.createElement("div");
        containerForGridRow.classList.add(`grid-row${i}`);

        for (let j = 1; j <= noOfRows; j++) {
            //add  div with 16 by 16 dimension
            const gridElement = document.createElement("div");
            gridElement.classList.add("atomGridElement");
            const availablePixelArea = 460;
            const pixelSizeForEachGridElement = availablePixelArea / noOfRows;

            //add pixel size dynamically to element based on noOfRows
            gridElement.style.cssText = `height:${pixelSizeForEachGridElement}px;width:${pixelSizeForEachGridElement}px`;
            containerForGridRow.append(gridElement);
        }
        allGridRow.append(containerForGridRow);
    }
}

function draw() {
    const allGridAtoms = document.querySelectorAll(".atomGridElement");
    allGridAtoms.forEach(atomGridElement => {
        atomGridElement.addEventListener("mouseover", () => {
            atomGridElement.style.backgroundColor = "red";
        });
    });
}


function resetGame() {
    const grid = document.querySelector("#grids");
    grid.innerHTML = '';
    gridMaker();
    draw();
}
//to reset
document.querySelector("#Reset").addEventListener("click", resetGame);

//to start
document.querySelector("#Start").addEventListener("click", () => {
    resetGame();
});
