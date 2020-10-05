<script>
import { ref } from 'vue'
import { DataGrid, VTable, VButton } from '@pathscale/vue3-ui'

const Component = {
  components: { VTable, VButton },
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
      color: 'Blue',
    })
    datagrid.value.addRow({
      id: 2,
      firstName: 'Sheri',
      lastName: 'Adamin ',
      color: 'Green',
    })
    datagrid.value.addRow({
      id: 3,
      firstName: 'Kristopher',
      lastName: 'Amos',
      color: 'Blue',
    })
    datagrid.value.addRow({
      id: 4,
      firstName: 'Nelly',
      lastName: 'Derby',
      color: 'Green',
    })
    datagrid.value.addRow({
      id: 5,
      firstName: 'Philander',
      lastName: 'Barney',
      color: 'Blue',
    })

    const addRow = index => {
      datagrid.value.addRow(
        {
          id: 1,
          firstName: 'Added',
          lastName: 'Row',
          color: 'Blue',
        },
        index,
      )
    }
    const deleteRow = index => {
      datagrid.value.deleteRow(index)
    }

    return {
      datagrid,
      addRow,
      deleteRow,
    }
  },
}
export default Component
</script>
<template>
  <section>
    <h4 class="is-size-5 mb-4">Table with sortable columns</h4>
    <v-table :data="datagrid" is-fullwidth sortable />

    <h4 class="is-size-5 mb-4 mt-6">Table with editable cells</h4>
    <v-table :data="datagrid" is-fullwidth editable />

    <h4 class="is-size-5 mb-4 mt-6">Table with rows grouped by column values</h4>
    <v-table :data="datagrid" is-fullwidth editable group-by="color" />

    <h4 class="is-size-5 mb-4 mt-6">Data grid with add/delete rows buttons</h4>
    <p>
      You can programmatically add rows to a certain index by using the optional index parameter and
      you can also delete rows from a certain index
    </p>

    <v-table :data="datagrid" searchable is-hoverable is-striped is-bordered is-fullwidth sortable>
      <template #header>
        <v-button @click="addRow(2)" light class="mr-4 mb-4"> Add row with index 2 </v-button>
        <v-button @click="deleteRow(2)" light ckass="mb-4"> Delete row with index 2 </v-button>
      </template>
    </v-table>
  </section>
</template>
