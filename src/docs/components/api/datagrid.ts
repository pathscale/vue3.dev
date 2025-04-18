const api = [
  {
    title: "DataGrid class",
    methods: [
      {
        name: "new DataGrid()",
        description: "Init the DataGrid class",
      },
      {
        name: "addColumn(name: string, caption: string, dataType: string, style: string, sticky = false)",
        description: "Adds a column to the grid",
      },
      {
        name: "addRow(content: Row, index: number)",
        description:
          "Adds a row to the grid, the index parameter is optional, only use it when you want to insert a row at a custom index",
      },
      {
        name: "deleteRow(index: number)",
        description: "Deletes a row from a given index",
      },
      {
        name: "editCell(row: Row, column: Column, newValue: string | number)",
        description: "Edits the cell at the given row+column position",
      },
      {
        name: "sortByColumn(column: string, ascendant: boolean)",
        description: "Sorts a column in a given order",
      },
      {
        name: "resetFilters()",
        description: "Resets the filters on the grid",
      },
      {
        name: "searchColumn(colName: string, query: string)",
        description: "Filters a column given a query",
      },
      {
        name: "toggleCheck(evt: Event, row: Row)",
        description: "Toggles the check state for a given row",
      },
      {
        name: "switchPage()",
        description: "Switches page",
      },
      {
        name: "toggleColumn({ name } : { name: string })",
        description: "Toggles the show state of the given column",
      },
      {
        name: "getColumns()",
        description: "Returns visible columns",
      },
      {
        name: "onDragStartRow(_evt: Event, row: Row, idx: number)",
        description: "Function to use with the @dragstart event",
      },
      {
        name: "onDropRow(_evt: Event, _row: Row, idx: number)",
        description: "Function to use with the @drop event",
      },
      {
        name: "onDragOverRow(evt: Event, _row: Row, idx: number)",
        description: "Function to use with the @dragover event",
      },
      {
        name: "onDragLeaveRow(_evt: Event, _row: Row, idx: number)",
        description: "Function to use with the @dragleave event",
      },
      {
        name: "onDragStartColumn(_evt: Event, column: Column, idx: number)",
        description: "Function to use with the @dragstart event",
      },
      {
        name: "onDropColumn(_evt: Event, _column: Column, idx: number)",
        description: "Function to use with the @drop event",
      },
      {
        name: "onDragOverColumn(evt: Event, _column: Column, idx: number)",
        description: "Function to use with the @dragover event",
      },
      {
        name: "onDragLeaveColumn(_evt: Event, _column: Column, idx: number)",
        description: "Function to use with the @dragleave event",
      },
      {
        name: "getColumnsObject()",
        description:
          "Returns an object that maps column names to column instances",
      },
      {
        name: "groups(column: string)",
        description: "Groups rows by a column",
      },
    ],
  },
];

export default api;
