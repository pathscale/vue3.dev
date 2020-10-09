<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'

const component = {
  components: { VColumns, VColumn }
}

export default component
</script>

<template>
  <section id="demo">
    <h1 class="is-title is-size-4 mb-4 mt-6">
      Basic columns
    </h1>
    <v-columns>
      <v-column>
        <p class="has-background-link has-text-white px-4 py-4">
          First Column
        </p>
      </v-column>
      <v-column>
        <p class="has-background-success has-text-white px-4 py-4">
          Second Column
        </p>
      </v-column>
      <v-column>
        <p class="has-background-primary has-text-white px-4 py-4">
          Third Column
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Specifying sizes
    </h1>
    <v-columns>
      <v-column size="is-full">
        <p class="has-background-danger has-text-white px-4 py-4">
          Full width column
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-1">
        <p class="has-background-primary has-text-white px-4 py-4">
          is 1
        </p>
      </v-column>
      <v-column size="is-11">
        <p class="has-background-link has-text-white px-4 py-4">
          is 9
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-2">
        <p class="has-background-info has-text-white px-4 py-4">
          is 2
        </p>
      </v-column>
      <v-column size="is-10">
        <p class="has-background-success has-text-white px-4 py-4">
          is 10
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-3">
        <p class="has-background-primary has-text-white px-4 py-4">
          is 3
        </p>
      </v-column>
      <v-column size="is-9">
        <p class="has-background-danger has-text-white px-4 py-4">
          is 9
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-4">
        <p class="has-background-success has-text-white px-4 py-4">
          is 4
        </p>
      </v-column>
      <v-column size="is-8">
        <p class="has-background-link has-text-white px-4 py-4">
          is 8
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-5">
        <p class="has-background-info has-text-white px-4 py-4">
          is 5
        </p>
      </v-column>
      <v-column size="is-7">
        <p class="has-background-primary has-text-white px-4 py-4">
          is 7
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-6">
        <p class="has-background-success has-text-white px-4 py-4">
          is 6
        </p>
      </v-column>
      <v-column size="is-6">
        <p class="has-background-danger has-text-white px-4 py-4">
          is 6
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Applying offsets
    </h1>
    <v-columns>
      <v-column size="is-5" offset="is-offset-7">
        <p class="has-background-primary has-text-white px-4 py-4">
          is 5, at the end
        </p>
      </v-column>
    </v-columns>

    <v-columns>
      <v-column size="is-4" offset="is-offset-2">
        <p class="has-background-link has-text-white px-4 py-4">
          is 4, pushed 2
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Narrow Column
    </h1>
    <v-columns>
      <v-column narrow>
        <div class="px-4 py-4 has-background-success has-text-white" style="width: 500px">
          <p class="title is-5 has-text-white">
            Narrow column
          </p>
          This column is 500px wide
        </div>
      </v-column>
      <v-column>
        <div class="has-background-light px-4 py-4">
          <p class="title is-5">
            Flexible column
          </p>
          This column takes all space left
        </div>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Nesting
    </h1>
    <v-columns>
      <v-column size="is-2" class="has-background-warning">
        Sidebar
      </v-column>
      <v-column size="is-10" class="has-background-info">
        <v-columns>
          <v-column class="has-text-white">
            Header
          </v-column>
        </v-columns>
        <v-columns>
          <v-column class="has-background-primary has-text-white">
            Left content
            <div style="height: 200px" />
          </v-column>
          <v-column class="has-background-success has-text-white">
            Right content
            <div style="height: 200px" />
          </v-column>
        </v-columns>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Gap
    </h1>
    <v-columns>
      <v-column>
        <p class="has-background-link has-text-white px-4 py-4">
          Default Gap
        </p>
      </v-column>
      <v-column>
        <p class="has-background-success has-text-white px-4 py-4">
          Default Gap
        </p>
      </v-column>
      <v-column>
        <p class="has-background-info has-text-white px-4 py-4">
          Default Gap
        </p>
      </v-column>
      <v-column>
        <p class="has-background-primary has-text-white px-4 py-4">
          Default Gap
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Gapless
    </h1>
    <v-columns gapless>
      <v-column>
        <p class="has-background-warning has-text-white px-4 py-4">
          Gapless column
        </p>
      </v-column>
      <v-column>
        <p class="has-background-success has-text-white px-4 py-4">
          Gapless column
        </p>
      </v-column>
      <v-column>
        <p class="has-background-info has-text-white px-4 py-4">
          Gapless column
        </p>
      </v-column>
      <v-column>
        <p class="has-background-primary has-text-white px-4 py-4">
          Gapless column
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Vertical Alignment
    </h1>
    <v-columns vcentered>
      <v-column>
        <p class="has-background-link has-text-white px-4 py-4">
          Short column
        </p>
      </v-column>
      <v-column>
        <p class="has-background-warning has-text-white px-4 py-4" style="height: 100px">
          Tall column
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Horizontal Alignment
    </h1>
    <v-columns hcentered>
      <v-column size="is-4">
        <p class="has-background-success has-text-white px-4 py-4">
          is 4
        </p>
      </v-column>
    </v-columns>

    <h1 class="is-title is-size-4 my-4">
      Multiline
    </h1>
    <v-columns multiline>
      <v-column size="is-4">
        <p class="has-background-info has-text-white px-4 py-4">
          is 4
        </p>
      </v-column>
      <v-column size="is-3">
        <p class="has-background-primary has-text-white px-4 py-4">
          is 3
        </p>
      </v-column>
      <v-column size="is-5">
        <p class="has-background-link has-text-white px-4 py-4">
          is 5
        </p>
      </v-column>
      <v-column size="is-6">
        <p class="has-background-success has-text-white px-4 py-4">
          is 6
        </p>
      </v-column>
      <v-column size="is-8">
        <p class="has-background-warning has-text-white px-4 py-4">
          is 8
        </p>
      </v-column>
      <v-column size="is-4">
        <p class="has-background-info has-text-white px-4 py-4">
          is 4
        </p>
      </v-column>
      <v-column size="is-2">
        <p class="has-background-link has-text-white px-4 py-4">
          is 2
        </p>
      </v-column>
    </v-columns>
  </section>
</template>
