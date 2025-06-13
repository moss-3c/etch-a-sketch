

function createDiv (parentNode) {
    const div = document.createElement("div");
    parentNode.appendChild(div);
}

function getNewSize () {
    let newSize =  prompt("Please enter new grid size (use single number eg. 3. max size: 100)");
    if (newSize > 100) {
        newSize = prompt("That size too large, please try again");
    }
    else {
        return newSize;
    }
}

function resizeGrid (gridSize, gridContainer) {
    gridContainer.textContent = ''; //clear old grid

    for (let i = 0; i < gridSize*gridSize; i++) {
        createDiv(gridContainer);
    }

    //change flex basis 
    const styles = document.styleSheets[0];
    const cssRules = styles.cssRules;
    for (let i = 0; i < cssRules.length; i++) {
        if (cssRules[i].selectorText === "div") {
            cssRules[i].style.setProperty('flex-basis',`calc(100% / ${gridSize})`) ;
            break;
        }
    }
}

function getRandomColor () {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

const container = document.querySelector("container");
resizeGrid (16, container);

container.addEventListener("mouseover", (event) => {
    if (event.target.style.backgroundColor === '') {
        event.target.style.backgroundColor = getRandomColor();
        event.target.style.opacity = 0.1;
    }
    else {
        event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
    }
})

const sizeButton = document.querySelector("button");
sizeButton.addEventListener("click", () => resizeGrid(getNewSize(), container));