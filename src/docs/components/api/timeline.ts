const api = [
  {
    title: "VTimeline",
    github:
      "https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/Timeline/Timeline.vue",
    props: [
      {
        name: "stages",
        description: "List of stages",
        type: "[{ active?: boolean, ...custom }]",
        required: true,
        default: [],
      },
    ],
    slots: [
      {
        name: "default",
        description: "Custom render for each stage",
      },
    ],
  },
];

export default api;
