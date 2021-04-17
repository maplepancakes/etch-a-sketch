// Make a grid square with a dimension of 16x16 (16 rows, 16 columns for each row)
// Create one div for each row, and inside that div create 16 more divs
/*
1. Use document.querySelector() to select the main div
2. Create a new element divRow using document.createElement()
3. Use a loop to append divRow to the main div 16 times
4. Create a new element divColumn using document.CreateElement()
5. Use two loops, first loop looks for each divRow
6. The second loop, nested inside the first loop, will append divColumn to divRow 16 times
*/

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

        divRow.textContent = `testRow`;
        divRow.classList.add(`row-containers`);

        div.appendChild(divRow);

        // Loop that adds grid columns
        for (let i = 0; i < numberofColumns; i++)
        {
            const divColumn = document.createElement(`div`);

            divColumn.textContent = `testColumn`
            divColumn.classList.add(`column-containers`)

            divRow.append(divColumn);
        }
    }
}

// Function call
loadGrid();