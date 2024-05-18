const gridElement = document.querySelector("#myGrid")

const squareElment = document.createElement("div")

    for (let index = 0; index < 100; index++) {
        
        const squareElment = document.createElement("div");
        squareElment.classList.add("quadratino");
        gridElement.appendChild(squareElment);
    }