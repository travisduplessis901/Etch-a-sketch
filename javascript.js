let squares = 0;

do{
    squares = prompt("Select a grid size of y (YxY)");

    if(squares > 99){
    alert("Please enter a value that is less than 100");
}

}while(squares > 99)

const container = document.querySelector("#container");

for (i = 0; i < squares; i++){

        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        for (j = 0; j < squares; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            grid.appendChild(row);
        }

    
    }
    
    
let rowArray = document.querySelectorAll(".row");

rowArray.forEach(function (rowA){
    rowA.addEventListener("mouseover", function(){
        this.style.background = "black";
    })
})

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    rowArray.forEach((element) => element.style.background = "peachpuff");
})