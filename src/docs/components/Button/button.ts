const api = [
  {
    props: [
      {
        name: 'type',
        description: 'Button color',
        type: 'String',
        values: `is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger, 
          The button is available in all the different colors defined by the $colors Sass map.`,
        default: '—'
      },
      {
        name: 'size',
        description: 'The button comes in 4 different sizes',
        type: 'String',
        values: 'is-small, is-normal, is-medium, is-large',
        default: 'is-normal'
      },
      {
        name: 'label',
        description: 'Button label',
        type: 'String',
        values: '',
        default: '—'
      },
      {
        name: 'loading',
        description: 'Loading state',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'rounded',
        description: 'Rounded style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'outlined',
        description: 'Outlined style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'expanded',
        description: 'Full-width style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'inverted',
        description: 'Inverted style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'focused',
        description: 'Focused style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'active',
        description: 'Active style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'hovered',
        description: 'Hovered style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'selected',
        description: 'Selected style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'native-type',
        description: 'Button type, like native',
        type: 'String',
        values: 'Any native button type',
        default: 'button'
      },
      {
        name: 'tag',
        description: 'Button tag name',
        type: 'String',
        values: 'button, a, input, router-link, nuxt-link...',
        default: 'button'
      },
      {
        name: 'light',
        description: 'Light style',
        type: 'Boolean',
        values: '—',
        default: 'false'
      },
      {
        name: 'Any native attribute',
        description: '—',
        type: '—',
        values: '—',
        default: '—'
      }
    ],
    events: [
      {
        name: 'click',
        description: 'Triggers on click',
        parameters: 'event: $event'
      },
      {
        name: '[any].native',
        description: 'Listen to any event using this syntax, e.g mousedown.native',
        parameters: 'event: $event'
      }
    ]
  }
]

export default api;
