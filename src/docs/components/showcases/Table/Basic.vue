<script>
import { ref } from 'vue'
import { DataGrid, VTable } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTableBasic',
  components: { VTable },
  setup() {
    const datagrid = ref(new DataGrid())

    datagrid.value.addColumn('id', 'ID', 'number')
    datagrid.value.addColumn('firstName', 'First Name', 'string')
    datagrid.value.addColumn('lastName', 'Last Name', 'string')
    datagrid.value.addColumn('color', 'Color', 'custom')

    datagrid.value.addRow({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      color: 'Blue'
    })
    datagrid.value.addRow({
      id: 2,
      firstName: 'Sheri',
      lastName: 'Adamin ',
      color: 'Green'
    })
    datagrid.value.addRow({
      id: 3,
      firstName: 'Kristopher',
      lastName: 'Amos',
      color: 'Blue'
    })
    datagrid.value.addRow({
      id: 4,
      firstName: 'Nelly',
      lastName: 'Derby',
      color: 'Green'
    })
    datagrid.value.addRow({
      id: 5,
      firstName: 'Philander',
      lastName: 'Barney',
      color: 'Blue'
    })

    return {
      datagrid
    }
  }
}
</script>

<template>
  <v-table :data="datagrid" />
</template>
