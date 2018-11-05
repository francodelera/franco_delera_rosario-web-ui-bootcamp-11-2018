function tableCreation () {

    var data = [
        ['Nombre', 'Profesion', 'Edad','Hobbies'],
        ['Juan', 'Albañil', '37','Pesca'],
        ['Angelica', 'Manicura', '53','Lectura'],
        ['Walter', 'Mecánico', '27','Canto'],
        ['Ezequiel', "Contador", '30', 'Futbol']
    ];

    var newTable = document.createElement('table'); //creates the table
   
    for(i=0; i<=4; i++){ // iterates from 0 to 4 (included)
       var tableRow = document.createElement('tr'); // creates the table row on its current position
        for(j=0; j<=3; j++){  // iterates from 0 to 3 (included)
            var tableCell = document.createElement('td'); // creates the table cell on its current position
            var matrixTxt = document.createTextNode(data[i][j]); // saves the data from the data array to matrixTXT on its current row and cell position
            tableCell.appendChild(matrixTxt); // makes the text to be a child of that current cell
			tableRow.appendChild(tableCell); // makes that table cell to be a chid of the current table row
        }
        newTable.appendChild(tableRow); // make the table row as a child of the new table
    }
    document.getElementById("container").appendChild(newTable); // makes the table to be a child of the div container
}

document.getElementById("btn").addEventListener("click", tableCreation); // when the user clicks on the button it will execute the function and so show the table