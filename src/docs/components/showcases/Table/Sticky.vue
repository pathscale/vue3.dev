<script>
import { DataGrid, VTable } from "@pathscale/vue3-ui";
import { ref } from "vue";

export default {
  name: "DevShowcaseTableSticky",
  components: { VTable },
  setup() {
    const datagrid = ref(new DataGrid());

    const COLS = 15;
    const ROWS = 100;

    for (let i = 0; i < COLS; ++i) {
      datagrid.value.addColumn(i.toString(), i.toString(), "number");
    }

    for (let i = 0; i < ROWS; ++i) {
      const obj = {};

      for (let j = 0; j < COLS; ++j) {
        obj[j.toString()] = i * j;
      }

      datagrid.value.addRow(obj);
    }

    // force stickyness on second row
    datagrid.value.columns[3].sticky = true;

    return {
      datagrid,
    };
  },
};
</script>

<template>
  <v-table :data="datagrid" sticky />
</template>
