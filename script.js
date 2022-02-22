let gridsize = 16;

function autos() {
    let autoArg = "";
    for (let i = 0; i < gridsize; i++) {
        autoArg = autoArg + " auto";
    }
    return autoArg;
};

function promptForGridsize() {
    let over100 = false;
    do {
        gridsize = prompt("Enter a gridsize!");
        if (gridsize > 100) {
            alert("Can't be over 100!");
            over100 = true;
        } else {
            over100 = false;
        }
    } while (over100);
}

function createGrid() {
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `${autos()}`;
    gridContainer.style.height = "100vh";
    gridContainer.style.width = "100vh";
    let body = document.querySelector("body");
    body.style.display = "flex";
    body.style.height = "100vh";
    for (let i = 0; i < gridsize; i++) {
        for (let j = 0; j < gridsize; j++) {
            let div = document.createElement("div");
            div.style.border = "solid black 0.5px";
            div.addEventListener("mouseover", addHovered);
            gridContainer.appendChild(div);
        }
    }
    body.appendChild(gridContainer);
}

function createButton() {
    let button = document.createElement("button");
    let body = document.querySelector("body");
    button.classList.add("button");
    button.textContent = "Reset";
    button.addEventListener("click", recreateGrid);
    body.appendChild(button);
}

function recreateGrid() {
    let gridContainer = document.querySelector(".gridContainer");
    let button = document.querySelector(".button");
    let body = document.querySelector("body");
    body.removeChild(gridContainer);
    body.removeChild(button);
    promptForGridsize();
    createGrid();
    createButton();
}

function addHovered() {
    this.classList.add("hovered");
}
createGrid();
createButton();

// let gridsize = prompt();
// let body = document.querySelector("body");

// for (let i = 0; i < gridsize; i++) {
//     let row = document.createElement("div");
//     row.style.display = "flex";
//     for (let j = 0; j < gridsize; j++) {
//         let div = document.createElement("div");
//         div.textContent = "A";
//         row.appendChild(div);
//     }
//     body.appendChild(row);
// }