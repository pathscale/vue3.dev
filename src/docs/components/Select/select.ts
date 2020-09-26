const api = 
  [ 
    {
      title: 'VSelect',
      props: [
        {
            name: 'v-model',
            description: 'Binding value',
            type: 'Any',
            values: '—',
            default: '—'
        },
        {
            name: 'placeholder',
            description: 'Specifies a short hint that describes the expected value of the input field',
            type: 'String',
            values: '—',
            default: '—'
        },
        {
            name: 'multiple',
            description: 'Specifies that multiple options can be selected at once',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'native-size',
            description: 'Specifies the number of visible options in a drop-down list',
            type: 'Number',
            values: '—',
            default: '4'
        },
        {
            name: 'size',
            description: 'The select element comes in 4 different sizes',
            type: 'String',
            values: 'is-small, is-normal, is-medium, is-large',
            default: '—'
        },
        {
            name: 'expanded',
            description: 'Full-width style',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'loading',
            description: 'Add the loading state to the Select',
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
            name: 'Color',
            description: 'Color of the select',
            type: 'String',
            values: 'is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...',
            default: '—'
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
            name: 'input',
            description: 'Triggers when value is changed',
            parameters: 'value: Any'
        },
        {
            name: 'focus',
            description: 'Triggers when input has received focus',
            parameters: 'event: $event'
        },
        {
            name: 'blur',
            description: 'Triggers when input has lost focus',
            parameters: 'event: $event'
        },
        {
            name: '[any].native',
            description: 'Listen to any native event, e.g. click.native',
            parameters: 'event: $event'
        }
    ],
    }
  ]

export default api;
