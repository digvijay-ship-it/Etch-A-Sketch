function gridMaker() {
    const allGridRow = document.querySelector("#grids");
    for (let i = 1; i <= 16; i++) {
        //make container
        const containerForGridRow = document.createElement("div");
        containerForGridRow.classList.add(`grid-row${i}`);
        for (let j = 1; j <= 16; j++) {
            //add 16 div with 16 by 16 dimension
            const gridElement = document.createElement("div");
            gridElement.classList.add("atomGridElement");
            // gridElement.style.cssText = "height:16px;width:16px;background-color:red";
            containerForGridRow.append(gridElement);
        }
        allGridRow.append(containerForGridRow);
    }
}

gridMaker();