const api = [
  {
    title: "VSlider",
    github:
      "https://github.com/pathscale/vue3-ui/blob/master/src/components/primitives/VSlider/Slider.vue",
    props: [
      {
        name: "v-model",
        description: "Binding value",
        type: "String, Number",
      },
      {
        name: "type",
        description: "Slider color",
        type: "String",
        values: "is-info, is-success, is-warning, is-danger",
      },
      {
        name: "size",
        description: "The slider comes in 3 different sizes",
        type: "String",
        values: "is-small, is-medium, is-large",
      },
      {
        name: "rounded",
        description: "Rounded thumb",
        type: "Boolean",
      },
      {
        name: "disabled",
        description: "Disable the slider",
        type: "Boolean",
      },
      {
        name: "tooltip",
        description: "Show tooltip when thumb is being dragged",
        type: "Boolean",
      },
      {
        name: "vertical",
        description: "Display vertically, it does not support tooltip",
        type: "Boolean",
      },
      {
        name: "Native attributes",
        values: "min, max, step",
      },
    ],
    events: [],
  },
];

export default api;
