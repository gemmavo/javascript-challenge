var tableData = data;

// reference the table body

var tbody = d3.select("tbody");

// create function to create table

function createTable(data) {

// clear existing data

    tbody.html("");

    // loop through data.js and fill out table elements

    data.forEach((dataRow) => {

    // appends row to table

        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key, value]) => {
            var cell = row.append("td")
            cell.text(value);
            }
        );
    });
}

// create function to filter by date

function filterData() {

    var date = d3.select("#datetime").property("value");

    let filteredData = tableData;

    // sees if there is date entered and filters based off of

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // calls createTable function based on filtered data

    createTable(filteredData)

}

// filters through data based on entry

d3.selectAll("#filter-btn").on("click", filterData);

// creates table using createTable function

createTable(tableData);


