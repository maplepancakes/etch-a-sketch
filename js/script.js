// Function that loads a grid with dimensions specified by variable: numberOfRows x numberofColumns
function loadGrid ()
{
    const numberOfRows = 16;
    const numberofColumns = 16;

    const div = document.querySelector(`div`);

    // Loop that adds grid rows
    for (let i = 0; i < numberOfRows; i++)
    {
        const divRow = document.createElement(`div`);

        divRow.classList.add(`row-containers`);

        div.appendChild(divRow);

        // Loop that adds grid columns
        for (let i = 0; i < numberofColumns; i++)
        {
            const divColumn = document.createElement(`div`);

            divColumn.classList.add(`column-containers`)

            divRow.append(divColumn);
        }
    }
}

// Function that permanently changes colour of column container upon mouse hovering
function permaHover()
{
    const divColumnHover = document.querySelectorAll(`.column-containers`) 
    
    for (let i = 0; i < divColumnHover.length; i++)
    {
        divColumnHover[i].addEventListener(`mouseenter`, function()
        {
            divColumnHover[i].classList.add(`perma-hover`);
        });
    }
}

// Function call
loadGrid();
permaHover();