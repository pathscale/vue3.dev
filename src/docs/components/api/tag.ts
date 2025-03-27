const api = [
  {
    title: 'VTag',
    github:
      'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Tag/Tag.vue',
    props: [
      {
        name: 'type',
        description: 'Like with buttons, there are different colors available',
        type: 'String',
        values: `is-white, is-black, is-light,
                is-dark, is-primary, is-info, is-success,
                is-warning, is-danger...`,
      },
      {
        name: 'size',
        description: 'The tag comes in 3 different sizes',
        type: 'String',
        values: 'is-normal, is-medium, is-large',
      },
      {
        name: 'close-type',
        description: 'Color of the cross button of tag',
        type: 'String',
        values: `is-white, is-black, is-light,
                is-dark, is-primary, is-info, is-success,
                is-warning, is-danger...`,
      },
      {
        name: 'rounded',
        description: 'You can add it to to make a rounded tag',
        type: 'Boolean',
      },
      {
        name: 'closable',
        description: 'You can add it to turn the tag into a closable tag',
        type: 'Boolean',
      },
      {
        name: 'attached',
        description: 'Close/delete button style equal to attached tags',
        type: 'Boolean',
      },
      {
        name: 'ellipsis',
        description: 'Adds ellipsis to not overflow the text',
        type: 'Boolean',
      },
      {
        name: 'tabstop',
        description: 'If should stop when using tab key',
        type: 'Boolean',
        default: 'true',
      },
      {
        name: 'disabled',
        description: 'Disable delete button',
        type: 'Boolean',
      },
      {
        name: 'aria-close-label',
        description: 'Accessibility label for the close button',
        type: 'String',
      },
      {
        name: 'close-icon',
        description: 'Add close icon to Tag',
        type: 'String',
      },
    ],
    events: [
      {
        name: 'close',
        description: 'Triggers when closable section is clicked',
      },
    ],
  },
]

export default api
