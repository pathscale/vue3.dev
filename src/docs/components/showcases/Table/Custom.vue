<script>
import { ref } from 'vue'
import { DataGrid, VTable, VSelect, VCard, VCardContent } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseTableCustom',
  components: { VTable, VSelect, VCard, VCardContent },
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
  <h4 class="is-size-5 mb-4">
    Table with custom header and footer
  </h4>
  <v-table :data="datagrid" is-fullwidth>
    <template #header>
      <p>This is the header</p>
    </template>
    <template #footer>
      <p>This is the footer</p>
    </template>
  </v-table>

  <h4 class="is-size-5 mb-4 mt-6">
    Table with custom component
  </h4>
  <v-table :data="datagrid" is-fullwidth>
    <template #color="props">
      <v-select v-model="props.row.color" color="is-dark" placeholder="primary" class="darkText">
        <option value="Blue">
          Blue
        </option>
        <option value="Green">
          Green
        </option>
      </v-select>
    </template>
  </v-table>

  <h4 class="is-size-5 mb-4 mt-6">
    Table with expandable rows
  </h4>
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
</template>
