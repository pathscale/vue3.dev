const api =
  [
    {
      title: 'VIcon',
      github: 'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Icon/Icon.vue',
      props: [
        {
          name: 'name',
          description: 'icon name',
          type: 'String',
          required: true
        },
        {
          name: 'src',
          description: 'path to the .svg icon (required once)',
          type: 'String',
          required: true
        },
        {
          name: 'bundle',
          description: 'bundle name where you want the icon be exported',
          type: 'String',
          required: true
        },
        {
          name: 'custom-class',
          description: 'CSS classes to be applied on icon',
          type: 'String',
        },
      ],
    }
  ]

export default api
