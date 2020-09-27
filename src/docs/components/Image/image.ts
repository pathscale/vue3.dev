const api = 
  [ 
    {
      title: 'VImage',
      props: [
        {
            name: 'src',
            description: 'The required src attribute specifies the path (URL) to the image',
            type: 'String',
        },
        {
            name: 'alt',
            description:  'The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader)',
            type: 'String',
        },
        {
            name: 'size',
            description: 'Image size',
            type: 'String',
            values: 'is-16x16, is-24x24, is-32x32, is-48x48, is-64x64, is-96x96, is-128x128',
        },
        {
            name: 'ratio',
            description: 'If you do not know the exact dimensions but know the ratio instead, you can use one of the 16 ratio modifiers',
            type: 'String',
            values: ' is-square, is-1by1, is-5by4, is-4by3, is-3by2, is-5by3, is-16by9, is-2by1, is-3by1, is-4by5, is-3by4, is-2by3, is-3by5, is-9by16, is-1by2, is-1by3',
        },
        {
            name: 'rounded',
            description: 'Rounded image.',
            type: 'Boolean',
            default: 'false'
        },
        {
            name: 'centered',
            description: 'Center the image in the container.',
            type: 'Boolean',
            default: 'false'
        },
    ],
    }
  ]

export default api;
