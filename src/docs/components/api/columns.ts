const api =
  [
    {
      title: 'VColumns',
      props: [
        {
          name: 'mobile',
          description: 'By default, columns are only activated from tablet onwards. This means columns are stacked on top of each other on mobile. If you want columns to work on mobile, use this prop',
          type: 'Boolean',
        },
        {
          name: 'desktop',
          description: 'If you only want columns on desktop upwards',
          type: 'Boolean',
        },
        {
          name: 'gapless',
          description: 'Remove the space between the columns',
          type: 'Boolean',
        },
        {
          name: 'gap',
          description: 'You can specify a custom column gap by appending these modifiers',
          type: 'String',
          values: 'is-0, is-1, ..., is-8, is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd, ...'
        },
        {
          name: 'multiline',
          description: 'Whenever you want to start a new line, you can close a columns container and start a new one. But you can also use this modifier and add more column elements than would fit in a single row.',
          type: 'Boolean',
        },
        {
          name: 'hcentered',
          description: 'Center columns horizontally',
          type: 'Boolean',
        },
        {
          name: 'vcentered',
          description: 'Center columns vertically',
          type: 'Boolean',
        },
      ],
    },
    {
      title: 'VColumn',
      props: [
        {
          name: 'size',
          description: 'Change the size of a single column. The other columns will fill up the remaining space automatically',
          type: 'String',
          values: 'is-1, is-2, ..., is-11, is-12, is-three-quarters, is-two-thirds, is-half, is-one-third, is-one-quarter, is-full, is-four-fifths, is-three-fifths, is-two-fifths, is-one-fifth'
        },
        {
          name: 'offset',
          description: 'Create a horizontal space around of the column',
          type: 'String',
          values: 'is-offset-1, is-offset-2, ..., is-offset-x '
        },
        {
          name: 'narrow',
          description: 'If you want a column to only take the space it needs',
          type: 'Boolean',
        },
        {
          name: 'narrow-breakpoint',
          description: 'As for the size modifiers, you can have narrow columns for different breakpoints',
          type: 'String',
          values: 'is-narrow-mobile, is-narrow-tablet, is-narrow-touch, is-narrow-desktop, is-narrow-widescreen, is-narrow-fullhd'
        }
      ],
    }
  ]

export default api
