<script>
import { ref } from 'vue'
import { DataGrid, VTable } from '@pathscale/vue3-ui'

const Component = {
  components: { VTable },
  setup() {
    const datagrid = ref(new DataGrid())

    const COLS = 10
    const ROWS = 100

    for (let i = 0; i < COLS; ++i) datagrid.value.addColumn(i.toString(), i.toString(), 'number')

    for (let i = 0; i < ROWS; ++i) {
      const obj = {}

      for (let j = 0; j < COLS; ++j) obj[j.toString()] = i * j

      datagrid.value.addRow(obj)
    }

    return {
      datagrid,
    }
  },
}
export default Component
</script>
<template>
<section>
  <h4 class="is-size-5 mb-4">Table with 100 rows</h4>
  <v-table
    :data="datagrid"
    pagination
    :rows-per-page-options="[1, 2, 5, 10, 20]"
    :rows-per-page="10"
    is-fullwidth
  />
</section>
</template>
