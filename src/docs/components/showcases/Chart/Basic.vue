<script>
import { VChart } from '@pathscale/vue3-ui'

import { reactive, computed } from 'vue'

export default {
  name: 'DevShowcaseChart',
  components: { VChart },
  setup() {
    const multiData = reactive({
      names: [],
      candles: [],
    })

    setInterval(() => {
      multiData.names.push(Date.now())
      const open = 4000 + Math.random() * 100
      const hight = 4200 + Math.random() * 100
      const low = 4000 - Math.random() * 100
      const close = 4000 + Math.random() * 100

      multiData.candles.push([open, hight, low, close, 2993.45281556])
    }, 5 * 1000)

    const candleChart = computed(() => ({
      title: 'Candle Chart',
      data: {
        labels: multiData.names,
        datasets: [
          {
            values: multiData.candles,
            formatted: multiData.candles
              .map(val => val[0])
              .map(function(d) {
                return d * 1000 + ' km'
              }),
          },
        ],
        yMarkers: [
          {
            label: Math.max(...multiData.candles.map(val => val[1]))
              .toFixed(2)
              .toString(),
            value: Math.max(...multiData.candles.map(val => val[1])),
            options: {
              labelPos: 'right',
            },
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
