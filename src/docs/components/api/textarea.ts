const api = [
  {
    title: 'VTextarea',
    github:
      'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Textarea/Textarea.vue',
    props: [
      {
        name: 'v-model',
        description: 'Binding value',
        type: 'String, Number',
      },
      {
        name: 'color',
        description: 'Textarea color',
        type: 'String',
        values:
          'is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...',
      },
      {
        name: 'size',
        description: 'The textarea element comes in 4 different sizes',
        type: 'String',
        values: 'is-small, is-normal, is-medium, is-large',
      },
      {
        name: 'loading',
        description: 'Add the loading state to the textarea',
        type: 'Boolean',
      },
      {
        name: 'focused',
        description: 'Focused style',
        type: 'Boolean',
      },
      {
        name: 'hovered',
        description: 'Hovered style',
        type: 'Boolean',
      },
      {
        name: 'Any native attribute',
      },
    ],
    events: [
      {
        name: '[any].native',
        description: 'Listen to any native event, e.g. click.native',
        parameters: 'event: $event',
      },
    ],
  },
]

export default api
