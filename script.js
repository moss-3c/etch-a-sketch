

function createDiv (parentNode) {
    const div = document.createElement("div");
    parentNode.appendChild(div);
}

const container = document.querySelector("container");

for (let i = 0; i < 16*16; i++) {
    createDiv(container);
}

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
})

const sizeButton = document.querySelector("button");
