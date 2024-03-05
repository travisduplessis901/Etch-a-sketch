let squares = 0;

do{
    squares = prompt("Select a grid size of y (YxY)");

    if(squares > 99){
    alert("Please enter a value that is less than 100");
}

}while(squares > 99)

let squareHeight = (90/squares) * 100;


const container = document.querySelector("#container");

for (i = 0; i < squares; i++){

        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        for (j = 0; j < squares; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            row.style.height = squareHeight + "%";
            grid.appendChild(row);
        }

    
    }
    
    
let rowArray = document.querySelectorAll(".row");

rowArray.forEach(function (rowA){
    rowA.addEventListener("mouseover", function(){
        let rgb1 = Math.floor(Math.random() * 256);
        let rgb2 = Math.floor(Math.random() * 256);
        let rgb3 = Math.floor(Math.random() * 256);

        this.style.background = "rgb(" + rgb1 + " " + rgb2 + " " + rgb3 + ")";
    })
})

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    rowArray.forEach((element) => element.style.background = "peachpuff");
})