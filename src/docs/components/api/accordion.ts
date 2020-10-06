const api =
    [
        {
            title: 'VAccordion',
            props: [
                {
                    name: 'is-horizontal',
                    type: 'boolean',
                    description: 'Makes the accordion show horizontally'
                },
                {
                    name: 'trigger-right',
                    type: 'boolean',
                    description: ''
                },
                {
                    name: 'trigger-left',
                    type: 'boolean'
                },
                {
                    name: 'expanded',
                    type: 'boolean'
                },
                {
                    name: 'background',
                    type: 'string'
                },
                {
                    name: 'color',
                    type: 'string'
                },
                {
                    name: 'hover',
                    type: 'boolean'
                },
                {
                    name: 'is-link',
                    type: 'boolean'
                },
                {
                    name: 'is-active',
                    type: 'boolean'
                },
                {
                    name: 'header-is-trigger',
                    type: 'boolean'
                }
            ],
            slots: [
                {
                    name: 'content'
                },
                {
                    name: 'header'
                },
                {
                    name: 'trigger'
                }
            ]
        },
        {
            title: 'VAccordionMenu',
            slots: [
                {
                    name: 'label',
                    description: 'File label',
                }
            ],
        }
    ]

export default api;
