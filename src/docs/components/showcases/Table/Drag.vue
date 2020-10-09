<script>
import { ref } from 'vue'
import { DataGrid, VTable } from '@pathscale/vue3-ui'

const Component = {
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

export default Component
</script>
<template>
  <section>
    <h4 class="is-size-5 mb-4">
      Draggable Columns
    </h4>
    <v-table :data="datagrid" draggable-columns is-fullwidth />

    <h4 class="is-size-5 mb-4 mt-6">
      Draggable Rows
    </h4>
    <v-table :data="datagrid" draggable-rows is-fullwidth />
  </section>
</template>
