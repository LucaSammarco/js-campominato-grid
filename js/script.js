const gridElement = document.querySelector("#myGrid")

const squareElment = document.createElement("div")

    for (let index = 0; index < 100; index++) {
        
        const squareElment = document.createElement("div");
        squareElment.classList.add("quadratino");
        squareElment.addEventListener("click", function () {
            squareElment.classList.add("active")
        });

        
        gridElement.appendChild(squareElment);
    }