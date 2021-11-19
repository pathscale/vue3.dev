<template>
  <div :style="spacingStyle">
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue'

const BASE = 8

export default {
  name: 'Spacing',
  props: {
    top: {
      type: [String, Number],
      default: 0,
    },
    bottom: {
      type: [String, Number],
      default: 0,
    },
    left: {
      type: [String, Number],
      default: 0,
    },
    right: {
      type: [String, Number],
      default: 0,
    },
    vertical: {
      type: [String, Number],
      default: 0,
    },
    horizontal: {
      type: [String, Number],
      default: 0,
    },
  },
  setup(props) {
    const spacingStyle = computed(() => {
      const top = Math.max(Number(props.top), Number(props.vertical)) * BASE
      const right = Math.max(Number(props.right), Number(props.horizontal)) * BASE
      const bottom = Math.max(Number(props.bottom), Number(props.vertical)) * BASE
      const left = Math.max(Number(props.left), Number(props.horizontal)) * BASE

      return `margin: ${top}px ${right}px ${bottom}px ${left}px;`
    })

    return { spacingStyle }
  },
}
</script>
