const api =
  [
    {
      title: 'VSidebar',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Sidebar/Sidebar.vue',
      props: [
        {
          name: 'open',
          description: 'Open the sidebar',
          type: 'Boolean',
        },
        {
          name: 'type',
          description: 'Sidebar color',
          type: 'String',
          values: 'is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...',
        },
        {
          name: 'overlay',
          description: 'Show an overlay when sidebar is open',
          type: 'Boolean',
        },
        {
          name: 'position',
          description: 'Sidebar display position',
          type: 'String',
          values: 'fixed, static, absolute',
          default: 'fixed'
        },
        {
          name: 'fullheight',
          description: 'Fullheight style',
          type: 'Boolean',
        },
        {
          name: 'fullwidth',
          description: 'Fullwidth style',
          type: 'Boolean',
        },
        {
          name: 'right',
          description: 'Show the sidebar on right',
          type: 'Boolean',
          values: '',
        },
        {
          name: 'mobile',
          description: 'Set the behavior in mobile',
          type: 'String',
          values: 'fullwidth, reduce, hide',
        },
        {
          name: 'reduce',
          description: 'Show a reduced sidebar',
          type: 'Boolean',
        },
        {
          name: 'expand-on-hover',
          description: 'Expand sidebar on hover when reduced or mobile is reduce',
          type: 'Boolean',
        },
        {
          name: 'expand-on-hover-fixed',
          description: 'Expand sidebar on hover with fixed position when reduced or mobile is reduce',
          type: 'Boolean',
        },
        {
          name: 'width',
          description: 'Sidebar width',
          type: 'Number',
        },
        {
          name: 'mini-width',
          description: 'Reduced sidebar width',
          type: 'Number',
        },
      ],
      events: [
        {
          name: 'close',
          description: 'Emited when sidebar is closed',
        }
      ]
    }
  ]

export default api
