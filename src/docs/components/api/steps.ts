const api = [
  {
    title: 'VSteps',
    github:
      'https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Steps/Steps.vue',
    props: [
      {
        name: 'v-model',
        description: 'Binding value, active tab',
        type: 'String, Number',
        required: true,
      },
      {
        name: 'size',
        description: 'Tabs size',
        type: 'String',
        values: 'is-small, is-medium, is-large',
      },
      {
        name: 'animated',
        description: 'Marker animation',
        type: 'Boolean',
      },
    ],
    events: [
      {
        name: 'change',
        description: 'Triggers when tab is changed',
        parameters: 'value: String|Number',
      },
    ],
  },
  {
    title: 'VStepItem',
    github:
      'https://github.com/pathscale/vue3-ui/blob/master/src/components/compounds/Steps/VStepItem.vue',
    props: [
      {
        name: 'title',
        description: 'Tab title',
        type: 'String',
      },
      {
        name: 'subtitle',
        description: 'Tab subtitle',
        type: 'String',
      },
      {
        name: 'marker',
        description: 'Tab marker',
        type: 'String',
      },
      {
        name: 'disabled',
        description: 'Tab is disabled',
        type: 'Boolean',
      },
      {
        name: 'clickable',
        description: 'Tab is clickable',
        type: 'Boolean',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Tab item body',
      },
    ],
  },
]

export default api
