<script>
import { ref, computed } from 'vue'
import { DataGrid, VTable, VSwitch } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTableDynamic',
  components: { VTable, VSwitch },
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

    const columns = computed(() => datagrid.value.getColumnsObject())

    return {
      datagrid,
      columns
    }
  }
}
</script>

<template>
  <h4 class="is-size-5 mb-4">
    Toggle Columns
  </h4>
  <v-switch class="mr-4 mb-4 mt-4" v-model="columns.id.show">
    ID
  </v-switch>
  <v-switch class="mr-4 mb-4 mt-4" v-model="columns.color.show">
    Color
  </v-switch>
  <v-table :data="datagrid" is-fullwidth />
</template>
