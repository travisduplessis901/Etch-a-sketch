const container = document.querySelector("#container");

for (i = 0; i < 16; i++){

        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        for (j = 0; j < 16; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            grid.appendChild(row);
        }

    
    }
    
    
