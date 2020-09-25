const api = 
  [ 
    {
      title: 'VSwitch',
      props: [
        {
            name: 'v-model',
            description: 'Binding value',
            type: 'Any',
            values: '—',
            default: 'false'
        },
        {
            name: 'type',
            description: 'Color of the switch',
            type: 'String',
            values: `is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...`,
            default: '—'
        },
        {
            name: 'passive-type',
            description: 'Color of the switch when switch is passive',
            type: 'String',
            values: `is-white, is-black, is-light,
                is-dark, is-primary, is-info, is-success,
                is-warning, is-danger,
                and any other colors you've set in the $colors list on Sass`,
            default: '—'
        },
        {
            name: 'native-value',
            description: 'Same as native value',
            type: 'Any',
            values: '—',
            default: '—'
        },
        {
            name: 'true-value',
            description: `Returned value when it's checked`,
            type: 'Any',
            values: '—',
            default: 'true'
        },
        {
            name: 'false-value',
            description: `Returned value when it's not checked`,
            type: 'Any',
            values: '—',
            default: 'false'
        },
        {
            name: 'disabled',
            description: 'Disable the switch',
            type: 'Boolean',
            values: '—',
            default: 'false'
        },
        {
            name: 'name',
            description: 'Switch name',
            type: 'String',
            values: '—',
            default: '—'
        },
        {
            name: 'size',
            description: 'Switch size',
            type: 'String',
            values: 'is-small, is-medium, is-large',
            default: '—'
        },
        {
            name: 'rounded',
            description: 'Rounded style',
            type: 'Boolean',
            values: '—',
            default: 'true'
        },
        {
            name: 'outlined',
            description: 'Outlined style',
            type: 'Boolean',
            values: '—',
            default: 'false'
        }
    ],
    events: [
        {
            name: '[any].native',
            description: 'Listen to any native event, e.g. click.native',
            parameters: 'event: $event'
        }
    ],
    }
]

export default api;
