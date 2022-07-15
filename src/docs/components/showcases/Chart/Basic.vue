<script>
import { VChart } from '@pathscale/vue3-ui'

import { reactive, computed } from 'vue'

export default {
  name: 'DevShowcaseChart',
  components: { VChart },
  setup() {
    const multiData = reactive({
      names: [
        'John',
        'Jane',
        'Joe',
        'Jack',
      ],
      candles: [
        [28, 28, 38, 38, 1],
        [38, 38, 55, 55, 1],
        [55, 55, 77, 77, 1],
        [77, 77, 66, 66, 1],
        [66, 66, 22, 22, 1],
      ],
    })

    const candleChart = computed(() => ({
      title: 'Candle Chart',
      data: {
        labels: multiData.names,
        datasets: [
          {
            values: multiData.candles,
          },
        ],
      },
      type: 'candle',
      height: 400,
      colors: ['grey'],
      isNavigable: 1,
      xUnit: 4,
    }))

    return {
      candleChart,
    }
  },
}
</script>

<template>
  <div>
    <div id="chartRef" />
    <v-chart v-bind="{ ...candleChart }" :key="candleChart.data.datasets[0].values.length" />
  </div>
</template>
