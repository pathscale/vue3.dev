const api = [
  {
    title: 'Toaster',
    github: 'https://github.com/pathscale/vue3-ui/tree/master/src/components/compounds/Toast',
    props: [
      {
        name: 'message',
        description: 'Message text/html',
        type: 'String',
        required: true,
      },
      {
        name: 'type',
        description: 'is-primary,is-success,is-danger,is-warning,is-info,is-link,is-light',
        type: 'String',
      },
      {
        name: 'position',
        description: 'top, bottom, top-right, bottom-right,top-left,bottom-left',
        default: 'bottom-right',
        type: 'String',
      },
      {
        name: 'duration',
        description: 'Visibility duration in milliseconds or false that disables duration',
        type: 'Number or false',
        default: '4000',
      },
      {
        name: 'dismissible',
        description: 'Allow user close by clicking',
        type: 'Boolean',
        default: 'true',
      },
      {
        name: 'onClick',
        description: 'Do something when user clicks',
        type: 'Function',
      },
      {
        name: 'onClose',
        description: 'Do something after toast gets dismissed',
        type: 'Function',
      },
      {
        name: 'queue',
        description: 'Wait for existing to close before showing new',
        type: 'Boolean',
      },
      {
        name: 'maxToasts',
        description: 'Defines the max of toasts showed in simultaneous',
        type: 'Number or false',
      },
      {
        name: 'pauseOnHover',
        description: 'Pause the timer when mouse on over a toast',
        type: 'Boolean',
        default: 'true',
      },
    ],
    methods: [
      {
        name: 'show(message, options = {})',
        description: 'Trigger a notification',
      },
      {
        name: 'clear()',
        description: 'clear notification queue',
      },
      {
        name: 'success(message, options = {})',
        description: 'Trigger a success notification',
      },
      {
        name: 'error(message, options = {})',
        description: 'Trigger a error notification',
      },
      {
        name: 'info(message, options = {})',
        description: 'Trigger a info notification',
      },
      {
        name: 'warning(message, options = {})',
        description: 'Trigger a warning notification',
      },
    ],
  },
]

export default api
