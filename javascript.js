const container = document.querySelector("#container");
const rows = document.createElement("div");
const columns = document.createElement("div");

rows.classList.add("rowContainer");
columns.classList.add("columnsContainer");

container.appendChild(rows);
container.appendChild(columns);

for (i = 0; i < 16; i++){
    const divRow = document.createElement("div");
    divRow.classList.add("rows");
    rows.appendChild(divRow);

    const divColumns = document.createElement("div");
    divColumns.classList.add("columns");
    columns.appendChild(divColumns);
}