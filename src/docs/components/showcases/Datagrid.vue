<template>
  <div class="grid-documentation has-text-black">
    <h1 class="is-size-1">Data Grid</h1>
    <p class="is-size-5">Powerful reactive component that displays data in a grid format</p>

    <h1 class="is-size-3 mt-4">Basic data grid</h1>
    <div class="gridExample">
      <v-table is-fullwidth :data="datagrid" />
    </div>

    <h1 class="is-size-3 mt-6">Hoverable data grid</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-hoverable />
    </div>

    <h1 class="is-size-3 mt-6">Bordered data grid</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered />
    </div>

    <h1 class="is-size-3 mt-6">Narrow data grid</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered is-narrow />
    </div>

    <h1 class="is-size-3 mt-6">Sortable data grid</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered sortable />
    </div>

    <h1 class="is-size-3 mt-6">Searchable data grid</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered searchable />
    </div>

    <h1 class="is-size-3 mt-6">Data grid with custom header</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered>
        <template #header> This is a custom header </template>
      </v-table>
    </div>

    <h1 class="is-size-3 mt-6">Data grid with custom footer</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered>
        <template #footer> This is a custom footer </template>
      </v-table>
    </div>

    <h1 class="is-size-3 mt-6">Data grid with custom column styling</h1>
    <div class="gridExample">
      <v-table
        :data="customStyleGrid"
        searchable
        is-hoverable
        is-striped
        is-bordered
        is-fullwidth
        sortable
      />
    </div>

    <h1 class="is-size-3 mt-6">Data grid with custom component</h1>
    <div class="gridExample">
      <v-table
        :data="datagrid"
        searchable
        is-hoverable
        is-striped
        is-bordered
        is-fullwidth
        sortable
      >
        <template #color="props">
          <v-select
            v-model="props.row.color"
            color="is-dark"
            placeholder="primary"
            class="has-text-dark"
          >
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </v-select>
        </template>
      </v-table>
    </div>

    <h1 class="is-size-3 mt-6">Selectable Data Grid</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered checkable />
    </div>

    <h1 class="is-size-3 mt-6">Paginated Data Grid</h1>
    <div class="gridExample">
      <v-table
        :data="paginatedDatagrid"
        is-fullwidth
        is-bordered
        pagination
        :rows-per-page-options="[1, 2, 3, 5, 10]"
        :rows-per-page="3"
      />
    </div>

    <h1 class="is-size-3 mt-6">Toggle Columns</h1>

    <v-switch v-model="columns.id.show" class="mr-4 mb-4 mt-4"> ID </v-switch>
    <v-switch v-model="columns.color.show" class="mr-4 mb-4 mt-4"> Color </v-switch>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth is-bordered />
    </div>

    <h1 class="is-size-3 mt-6">Expandable Rows</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth expandable>
        <template #expanded="props">
          <v-card>
            <v-card-content>
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://via.placeholder.com/96" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    {{ props.row.firstName }}
                  </p>
                  <p class="subtitle is-6">
                    {{ props.row.lastName }}
                  </p>
                </div>
              </div>
              Whose favorite color is <a>@{{ props.row.color }}</a>
            </v-card-content>
          </v-card>
        </template>
      </v-table>
    </div>

    <h1 class="is-size-3 mt-6">Data grid with add/delete rows buttons</h1>
    <p>
      You can programmatically add rows to a certain index by using the optional index parameter and
      you can also delete rows from a certain index
    </p>
    <div class="gridExample">
      <v-table
        :data="customIndexGrid"
        searchable
        is-hoverable
        is-striped
        is-bordered
        is-fullwidth
        sortable
      >
        <template #header>
          <v-button @click="addRow(2)" light class="mr-4 mb-4"> Add row with index 2 </v-button>
          <v-button @click="deleteRow(2)" light ckass="mb-4"> Delete row with index 2 </v-button>
        </template>
      </v-table>
    </div>

    <h1 class="is-size-3 mt-6">Draggable Rows</h1>
    <p class="mb-4">
      The data table will allow for dragging rows if the prop <code>draggable-rows</code> is present
      <br />
      The current state of the rows, where the updated order is reflected can be accesed via
      <code>datagrid.rows</code>
    </p>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth draggable-rows />
    </div>

    <h1 class="is-size-3 mt-6">Draggable Columns</h1>
    <p class="mb-4">
      The data table will allow for dragging columns if the prop <code>draggable-columns</code> is
      present <br />
      The current state of the columns, where the updated order is reflected can be accesed via
      <code>datagrid.columns</code>
    </p>

    <h1 class="is-size-3 mt-6">Cell editing</h1>
    <p class="mb-4">
      You can edit cells by adding the <code>editable</code> prop to the component or by using the
      <code>datagrid.editCells(row, column, newValue)</code> function
    </p>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth editable />
    </div>

    <h1 class="is-size-3 mt-6">Group by column values</h1>
    <p class="mb-4">
      You can configure the table to group rows by common values in one column, simply pass the
      <code>group-by="colname"</code>
    </p>

    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth group-by="color" />
    </div>

    <h1 class="is-size-3 mt-6">Sticky headers and columns</h1>
    <div class="gridExample">
      <v-table :data="datagrid" is-fullwidth sticky />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
// eslint-disable-next-line import/no-unresolved -- false positive
import {
  VColumns,
  VColumn,
  VSelect,
  VButton,
  VAccordion,
  VTabs,
  VTab,
  VCard,
  VCardContent,
  VTable,
  VSwitch,
  DataGrid,
} from '@pathscale/vue3-ui'

const Grid = {
  components: {
    VColumns,
    VColumn,
    VTable,
    VSelect,
    VButton,
    // Snippet,
    VAccordion,
    VTabs,
    VTab,
    VCard,
    VCardContent,
    VSwitch,
    DataGrid,
  },
  setup() {
    const datagrid = ref(new DataGrid())
    const columns = computed(() => datagrid.value.getColumnsObject())
    const activeTab = ref(0)

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

    const paginatedDatagrid = ref(new DataGrid())

    paginatedDatagrid.value.addColumn('id', 'ID', 'number')
    paginatedDatagrid.value.addColumn('firstName', 'First Name', 'string')
    paginatedDatagrid.value.addColumn('lastName', 'Last Name', 'string')
    paginatedDatagrid.value.addColumn('color', 'Color', 'custom')

    paginatedDatagrid.value.addRow({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      color: 'Blue',
    })
    paginatedDatagrid.value.addRow({
      id: 2,
      firstName: 'Sheri',
      lastName: 'Adamin ',
      color: 'Green',
    })
    paginatedDatagrid.value.addRow({
      id: 3,
      firstName: 'Kristopher',
      lastName: 'Amos',
      color: 'Blue',
    })
    paginatedDatagrid.value.addRow({
      id: 4,
      firstName: 'Nelly',
      lastName: 'Derby',
      color: 'Green',
    })
    paginatedDatagrid.value.addRow({
      id: 5,
      firstName: 'Philander',
      lastName: 'Barney',
      color: 'Blue',
    })

    const customStyleGrid = ref(new DataGrid())

    customStyleGrid.value.addColumn('id', 'ID', 'number', 'has-text-left')
    customStyleGrid.value.addColumn(
      'firstName',
      'First Name',
      'string',
      'has-text-centered is-white',
    )
    customStyleGrid.value.addColumn('lastName', 'Last Name', 'string', 'has-text-centered')
    customStyleGrid.value.addColumn('color', 'Color', 'custom', 'has-text-right')

    customStyleGrid.value.addRow({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      color: 'Blue',
    })
    customStyleGrid.value.addRow({
      id: 2,
      firstName: 'Sheri',
      lastName: 'Adamin ',
      color: 'Green',
    })
    customStyleGrid.value.addRow({
      id: 3,
      firstName: 'Kristopher',
      lastName: 'Amos',
      color: 'Blue',
    })
    customStyleGrid.value.addRow({
      id: 4,
      firstName: 'Nelly',
      lastName: 'Derby',
      color: 'Green',
    })
    customStyleGrid.value.addRow({
      id: 5,
      firstName: 'Philander',
      lastName: 'Barney',
      color: 'Blue',
    })

    const customIndexGrid = ref(new DataGrid())

    customIndexGrid.value.addColumn('id', 'ID', 'number')
    customIndexGrid.value.addColumn('firstName', 'First Name', 'string')
    customIndexGrid.value.addColumn('lastName', 'Last Name', 'string')
    customIndexGrid.value.addColumn('color', 'Color', 'custom')

    customIndexGrid.value.addRow({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      color: 'Blue',
    })
    customIndexGrid.value.addRow({
      id: 2,
      firstName: 'Sheri',
      lastName: 'Adamin ',
      color: 'Green',
    })
    customIndexGrid.value.addRow({
      id: 3,
      firstName: 'Kristopher',
      lastName: 'Amos',
      color: 'Blue',
    })
    customIndexGrid.value.addRow({
      id: 4,
      firstName: 'Nelly',
      lastName: 'Derby',
      color: 'Green',
    })
    customIndexGrid.value.addRow({
      id: 5,
      firstName: 'Philander',
      lastName: 'Barney',
      color: 'Blue',
    })

    const addRow = index => {
      customIndexGrid.value.addRow(
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
      customIndexGrid.value.deleteRow(index)
    }

    const SIZE = 16
    const hugeGrid = ref(new DataGrid())

    hugeGrid.value.addColumn('id', 'ID', 'number')
    hugeGrid.value.addColumn('col1', 'Col1', 'number')
    hugeGrid.value.addColumn('col2', 'Col2', 'number')
    hugeGrid.value.addColumn('col3', 'col3', 'number')
    hugeGrid.value.addColumn('col4', 'col4', 'number')
    hugeGrid.value.addColumn('col5', 'col5', 'number')
    hugeGrid.value.addColumn('col6', 'col6', 'number')
    hugeGrid.value.addColumn('col7', 'col7', 'number')
    hugeGrid.value.addColumn('col8', 'col8', 'number')
    hugeGrid.value.addColumn('col9', 'col9', 'number')

    for (let i = 0; i < 1000; ++i)
      hugeGrid.value.addRow({
        id: i,
        col1: i * 2,
        col2: i * 3,
        col3: i * 4,
        col4: i * 5,
        col5: i * 6,
        col6: i * 7,
        col7: i * 8,
        col8: i * 9,
        col9: i * 10,
      })

    return {
      datagrid,
      paginatedDatagrid,
      customStyleGrid,
      customIndexGrid,
      hugeGrid,
      addRow,
      deleteRow,
      activeTab,
      columns,
    }
  },
}
export default Grid
</script>

<style>
.grid-documentation {
  height: 100vh;
  background-color: white;
  overflow: scroll;
}
.gridTabs .tabs a {
  color: black !important;
}
.gridExample {
  padding: 20px 20px 5px 20px;
  border: thin solid rgba(0, 0, 0, 0.12);
}
.codeSnippet {
  border-top: thin solid rgba(0, 0, 0, 0.12);
}
</style>
