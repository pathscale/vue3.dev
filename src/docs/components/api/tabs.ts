const api = 
[ 
  {
    title: 'VTabs',
    props: [
      {
        name: 'v-model',
        description: 'Binding value, active tab',
        type: 'String, Number',
        required: true
      },
      {
        name: 'size',
        description: 'Tabs size',
        type: 'String',
        values: 'is-small, is-medium, is-large',
      },
      {
        name: 'type',
        description: 'Tabs style',
        type: 'String',
        values: 'is-boxed, is-toggle',
      },
      {
        name: 'expanded',
        description: 'Fullwidth style',
        type: 'Boolean',
      },
      {
        name: 'position',
        description: 'Position of the tab',
        type: 'String',
        values: 'is-centered, is-right',
      },
      {
        name: 'animated',
        description: 'Tabs have a horizontal transition',
        type: 'Boolean',
        default: 'true'
      },
      {
        name: 'vanimated',
        description: 'Tabs have a vertical collapse effect',
        type: 'Boolean',
        default: 'true'
      },
    ],
    events: [
      {
        name: 'change',
        description: 'Triggers when tab is changed',
        parameters: 'value: String|Number'
      },
    ]
  },
  {
    title: 'VTab',
    props: [
      {
        name: 'label',
        description: 'Tab label',
        type: 'String',
        required: true,
      },
      {
        name: 'disabled',
        description: 'Tab is disabled',
        type: 'Boolean',
      },
      {
        name: 'visible',
        description: 'Tab is visible',
        type: 'Boolean',
        default: 'true'
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Tab item body',
      },
    ]
  }
]

export default api;
