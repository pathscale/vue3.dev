const api = [
  {
    title: 'VAvatar',
    github:
      'https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Avatar/Avatar.vue',
    props: [
      {
        name: 'src',
        description: 'The src attribute specifies the path (URL) to the image',
        type: 'String',
        default: 'null',
      },
      {
        name: 'alt',
        description:
          'The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader)',
        type: 'String',
      },
      {
        name: 'size',
        description: 'Image size',
        type: 'String',
        values: 'is-16x16, is-24x24, is-32x32, is-48x48, is-64x64, is-96x96, is-128x128',
      },
      {
        name: 'rounded',
        description: 'Rounded image.',
        type: 'Boolean',
        default: 'true',
      },
      {
        name: 'custom-class',
        description: 'CSS classes to be applied on image',
        type: 'String',
      },
    ],
  },
]

export default api
