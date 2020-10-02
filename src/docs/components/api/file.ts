const api = 
  [ 
    {
      title: 'VFile',
      props: [
        {
          name: 'has-name',
          description: 'Show file name',
          type: 'Boolean',
          
        },
        {
          name: 'fullwidth',
          description: 'Full-width style',
          type: 'Boolean',
          
        },
        {
          name: 'boxed',
          description: 'Boxed block style',
          type: 'Boolean',
          
        },
        {
          name: 'size',
          description: 'The file input comes in 4 different sizes',
          type: 'String',
          values: 'is-small, is-normal, is-medium, is-large',
          default: 'is-normal'
        },
        {
          name: 'type',
          description: 'File input color',
          type: 'String',
          values: `is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...`,
        },
        {
            name: 'alignment',
            description: "You can align the file input",
            type: 'String',
            values: 'is-centered, is-right'
        },
        {
          name: 'Any native attribute',
        }
      ],
      events: [
        {
          name: '[any].native',
          description: 'Listen to any event using this syntax, e.g click.native',
          parameters: 'event: $event'
        }
      ]
    }
  ]

export default api;
