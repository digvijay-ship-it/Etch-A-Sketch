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
            gridElement.style.cssText = `height:${pixelSizeForEachGridElement}px;width:${pixelSizeForEachGridElement}px;`;
            containerForGridRow.append(gridElement);
        }
        allGridRow.append(containerForGridRow);
    }
}
function getBoldColor() {
    return "black";
}
function getRandomColor() {
    let colorRGB = [];
    for (let i = 0; i < 3; i++) {
        colorRGB.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + colorRGB.join(',') + ')';
}

function draw(colorTypeFunc) {
    const allGridAtoms = document.querySelectorAll(".atomGridElement");
    let colorOptions = colorTypeFunc;
    console.log(colorOptions);
    allGridAtoms.forEach(atomGridElement => {
        atomGridElement.addEventListener("mouseover", () => {
            atomGridElement.style.backgroundColor = colorOptions();
        });
    });
}

function resetGame() {
    const grid = document.querySelector("#grids");
    grid.innerHTML = '';
    gridMaker();
}

//to start
resetGame();
document.querySelector("#Start").addEventListener("click", () => {
    resetGame();
});

const colorOptions = document.querySelectorAll('#drawOptions>*');
colorOptions.forEach(eachColorOption => {
    eachColorOption.addEventListener('click', (event) => {
        if (event.target.id === "boldColor") {
            draw(getBoldColor);
        }
        else if (event.target.id === "rainbow") {
            draw(getRandomColor);
        }
    })
});