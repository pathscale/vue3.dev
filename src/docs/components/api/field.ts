const api = 
  [ 
  {
    title: 'VField',
    props: [
    {
      name: 'type',
      description: `Field message color`,
      type: 'String',
      values: `is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...`,
    },
    {
      name: 'label',
      description: 'Field label',
      type: 'String',
    },
    {
      name: 'label-for',
      description: 'Associate the label with a child control element',
      type: 'String',
    },
    {
      name: 'message',
      description: 'Field message text',
      type: 'String',
    },
    {
      name: 'grouped',
      description: 'Group child control elements horizontally',
      type: 'Boolean',
      
    },
    {
      name: 'group-multiline',
      description: 'Allow controls to fill up multiple lines. This is ideal for a long list of elements',
      type: 'Boolean',
    },
    {
      name: 'position',
      description: 'Which position should the addons or the group appear',
      type: 'String',
      values: 'has-addons-centered, has-addons-right, is-grouped-centered, is-grouped-right',
    },
    {
      name: 'addons',
      description: 'Attach child control elements together',
      type: 'Boolean'
    },
    {
      name: 'horizontal',
      description: 'If you want a horizontal form control',
      type: 'Boolean',
    },
    {
      name: 'size',
      description: 'Position of label',
      type: 'String',
      values: 'Field comes with 4 size modifiers',
      default: 'is-small, is-normal, is-medium, is-large'
    }
    ],
  }
  ]

export default api;
