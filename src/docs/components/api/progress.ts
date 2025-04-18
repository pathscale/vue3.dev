const api = [
  {
    title: "VProgress",
    github:
      "https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Progress/Progress.vue",
    props: [
      {
        name: "type",
        description: "Progress bar color",
        type: "String",
        values:
          "is-white, is-light, is-dark, is-black, is-text, is-primary, is-link, is-info, is-success, is-warning, is-danger...",
        default: "is-darkgrey",
      },
      {
        name: "size",
        description: "Progress bar size",
        type: "String",
        values: "is-small, is-medium, is-large",
      },
      {
        name: "value",
        description: "Progress bar value",
        type: "Number",
      },
      {
        name: "max",
        description: "Progress bar max value",
        type: "Number",
        default: "100",
      },
      {
        name: "show-value",
        description: "Show value inside the progress bar",
        type: "Boolean",
      },
      {
        name: "format",
        description: "Display raw number or percent value",
        type: "String",
        values: "raw, percent",
        default: "raw",
      },
      {
        name: "precision",
        description: "How many decimal digits should be displayed",
        type: "Number",
        default: "2",
      },
      {
        name: "keep-trailing-zeroes",
        description: "Truncate or not the trailing zeroes",
        type: "Boolean",
      },
    ],
    events: [
      {
        name: "click",
        description: "Triggers on click",
        parameters: "event: $event",
      },
      {
        name: "[any].native",
        description:
          "Listen to any event using this syntax, e.g mousedown.native",
        parameters: "event: $event",
      },
    ],
  },
];

export default api;
