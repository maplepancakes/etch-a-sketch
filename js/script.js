let numberOfRows = 16;
let numberOfColumns = 16;

function verifyInput(input)
{
    const maxDimension = 50;

        if (input === ``)
        {
            alert(`Input cannot be blank.`)

            return false;
        }
        else if (input > maxDimension)
        {
            alert(`Max dimension cannot exceed ${maxDimension}.`);

            return false;
        }
        else if (input < 1)
        {
            alert(`Dimension cannot be less than 1.`);
            
            return false;
        }
        else
        {
            return true;
        }
}

// Function that calculates padding size
function calculateDimension()
{
    const rowColumnDimension = 160;

    while(true)
    {
        let numberOfRowsAndColumns = prompt(`Specify dimensions (e.g. 16 for a 16x16 grid): `);

        let verify = verifyInput(numberOfRowsAndColumns);

        if (verify === false)
        {
            continue;
        }
        else if (verify === true)
        {
            let paddingDimension = rowColumnDimension/numberOfRowsAndColumns;

            numberOfRows = numberOfRowsAndColumns;
            numberOfColumns = numberOfRowsAndColumns;

            return paddingDimension;
        }

        break;
    }
}

// Function that sets padding
function setPadding(dimension)
{
    const divColumn = document.querySelectorAll(`.column-containers`);

    for (let i = 0; i < divColumn.length; i++)
    {
        divColumn[i].style.padding = dimension + "px";
    }
}

// Function that loads a grid with dimensions specified by variable: numberOfRows x numberofColumns
function loadGrid ()
{
    const div = document.querySelector(`div`);

    // Retrieves value to set padding for class="column-containers"
    let dimension = calculateDimension();

    // Loop that adds grid rows
    for (let i = 0; i < numberOfRows; i++)
    {
        const divRow = document.createElement(`div`);

        divRow.classList.add(`row-containers`);

        div.appendChild(divRow);

        // Loop that adds grid columns
        for (let i = 0; i < numberOfColumns; i++)
        {
            const divColumn = document.createElement(`div`);

            divColumn.classList.add(`column-containers`);

            divRow.append(divColumn);
        }
    }

    // Sets padding for class="column-containers"
    setPadding(dimension);
}

// Function that removes current grid
function removeGrid()
{
    const div = document.querySelector(`.main-container`);
    const divRow = document.querySelectorAll(`.row-containers`);

    for (let i = 0; i < divRow.length; i++)
    {
        div.removeChild(divRow[i]);
    }
}

// Function that resets grid
function resetButton()
{
    const resetButton = document.querySelector(`button`);

    resetButton.addEventListener(`click`, function()
    {
        const divFilledColumns  = document.querySelectorAll(`.perma-hover`);
    
        for (let i = 0; i < divFilledColumns.length; i++)
        {
            divFilledColumns[i].classList.remove(`perma-hover`);
        }

        removeGrid();
        loadGrid();
        permaHover();
    });
}

// Function that permanently changes colour of column container upon mouse hovering
function permaHover()
{
    const divColumnHover = document.querySelectorAll(`.column-containers`); 
    
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
resetButton();