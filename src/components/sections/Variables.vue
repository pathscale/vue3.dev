<script>
import { VTag } from '@pathscale/vue3-ui'

export default {
  name: 'DevVariables',
  components: { VTag },
  props: {
    'variables': Object
  }
}
</script>

<template>
  <div>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(name, index) in Object.keys(variables)" :key="index">
          <td><code>{{ name }}</code></td>
          <td>
            <v-tag>
              {{ variables[name] || '—' }}
            </v-tag>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
