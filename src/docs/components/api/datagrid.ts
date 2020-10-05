const api = 
  [ 
    {
      title: 'VTable',
      props: [
        {
          name: 'data',
          description: 'Configuration object where rows and columns are registered',
          type: 'Object',
          values: `Must be a DataGrid class instance`,
        },
        {
          name: 'searchable',
          description: 'Allows the table to display search inputs for every column',
          type: 'Boolean',
          default: 'false'
        },
        {
          name: 'checkable',
          description: 'Configures the table to display checking boxes to select a set of rows',
          type: 'Boolean',
          default: 'false'
        },
        {
          name: 'pagination',
          description: 'The table displays pagination buttons',
          type: 'Boolean',
          default: 'false'
        },
        {
            name: 'rows-per-page',
            description: 'Amount of rows to display per page initially',
            type: 'Number',
            default: '5'
        },
        {
            name: 'rows-per-page-options',
            description: 'Possible values for rows per page dropdown',
            type: 'Array',
            default: '[]'
        },
        {
            name: 'is-bordered',
            description: 'Table shows boders on all cells',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'is-striped',
            description: 'Adds subble background colors for even positioned rows',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'is-narrow',
            description: 'Reduces the rows height for a more compact table',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'is-hoverable',
            description: 'Changes background color for hovered rows',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'is-fullwidth',
            description: 'The table will take the full width of its parent component',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'has-reset-btn',
            description: 'The table will show a button that will reset all configurations',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'sortable',
            description: 'Sorting will be available for each of the columns',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'expandable',
            description: 'Rows will be expandable, a slot named expanded is available for custom expanded content',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'draggable-rows',
            description: 'Rows will be draggable so their order can be changed',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'draggable-columns',
            description: 'Columns will be draggable so their order can be changed',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'editable',
            description: 'Every cell will be editable if clicked',
            type: 'Boolean',

            default: 'false'
        },
        {
            name: 'group-by',
            description: 'Rows will be shown in groups of common values for a given column',
            type: 'String',
            values: 'a column name',
            default: 'null'
        }
      ],
      
    }
  ]

export default api;
