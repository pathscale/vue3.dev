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

    const customStyleGrid = ref(new DataGrid())
    customStyleGrid.value.addColumn('id', 'ID', 'number', 'has-text-left')
    customStyleGrid.value.addColumn(
      'firstName',
      'First Name',
      'string',
      'has-text-centered is-white'
    )
    customStyleGrid.value.addColumn('lastName', 'Last Name', 'string', 'has-text-centered')
    customStyleGrid.value.addColumn('color', 'Color', 'custom', 'has-text-right')
    customStyleGrid.value.addRow({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      color: 'Blue'
    })
    customStyleGrid.value.addRow({
      id: 2,
      firstName: 'Sheri',
      lastName: 'Adamin ',
      color: 'Green'
    })
    customStyleGrid.value.addRow({
      id: 3,
      firstName: 'Kristopher',
      lastName: 'Amos',
      color: 'Blue'
    })
    customStyleGrid.value.addRow({
      id: 4,
      firstName: 'Nelly',
      lastName: 'Derby',
      color: 'Green'
    })
    customStyleGrid.value.addRow({
      id: 5,
      firstName: 'Philander',
      lastName: 'Barney',
      color: 'Blue'
    })

    return {
      datagrid,
      customStyleGrid
    }
  }
}
export default Component
</script>
<template>
  <section>
    <h4 class="is-size-5 mb-4">
      Table with boders
    </h4>
    <v-table :data="datagrid" is-bordered />

    <h4 class="is-size-5 mb-4 mt-6">
      Table with stripes
    </h4>
    <v-table :data="datagrid" is-striped />

    <h4 class="is-size-5 mb-4 mt-6">
      Compact table
    </h4>
    <v-table :data="datagrid" is-narrow />

    <h4 class="is-size-5 mb-4 mt-6">
      Table with hover effect
    </h4>
    <v-table :data="datagrid" is-hoverable />

    <h4 class="is-size-5 mb-4 mt-6">
      Table with full width
    </h4>
    <v-table :data="datagrid" is-fullwidth />

    <h4 class="is-size-5 mb-4 mt-6">
      Table with all modifiers
    </h4>
    <v-table :data="datagrid" is-fullwidth is-striped is-narrow is-hoverable is-bordered />

    <h4 class="is-size-5 mb-4 mt-6">
      Data grid with custom column styling
    </h4>
    <v-table
      :data="customStyleGrid"
      is-hoverable
      is-striped
      is-bordered
      is-fullwidth />
  </section>
</template>
