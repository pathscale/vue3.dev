<script>
import { reactive } from 'vue'
import { VField, VInput, VSelect, VSwitch, VPagination } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcasePagination',
  components: { VField, VInput, VSelect, VSwitch, VPagination },
  setup() {
    const state = reactive({
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
    })
    return { state }
  },
}
</script>

<template>
  <v-field grouped group-multiline>
    <v-field label="Total">
      <v-input type="number" v-model="state.total" />
    </v-field>
    <v-field label="Items per page">
      <v-input type="number" v-model="state.perPage" />
    </v-field>
  </v-field>
  <v-field grouped group-multiline>
    <v-field label="Show buttons before current">
      <v-input type="number" v-model="state.rangeBefore" min="0" />
    </v-field>
    <v-field label="Show buttons after current">
      <v-input type="number" v-model="state.rangeAfter" min="0" />
    </v-field>
  </v-field>
  <v-field grouped group-multiline>
    <v-field label="Order">
      <v-select v-model="state.order">
        <option value="">
          default
        </option>
        <option value="is-centered">
          is-centered
        </option>
        <option value="is-right">
          is-right
        </option>
      </v-select>
    </v-field>
    <v-field label="Size">
      <v-select v-model="state.size">
        <option value="">
          default
        </option>
        <option value="is-small">
          is-small
        </option>
        <option value="is-medium">
          is-medium
        </option>
        <option value="is-large">
          is-large
        </option>
      </v-select>
    </v-field>
  </v-field>

  <div class="block">
    <v-switch v-model="state.isSimple">
      Simple
    </v-switch>
    <v-switch v-model="state.isRounded">
      Rounded
    </v-switch>
  </div>

  <hr />
  <v-pagination
    :total="state.total"
    v-model:current="state.current"
    :range-before="state.rangeBefore"
    :range-after="state.rangeAfter"
    :order="state.order"
    :size="state.size"
    :simple="state.isSimple"
    :rounded="state.isRounded"
    :per-page="state.perPage"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page" />
</template> 