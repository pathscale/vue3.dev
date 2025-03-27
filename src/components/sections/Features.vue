<script>
import { VColumns, VColumn, VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'DevBlog',
  components: { VColumns, VColumn, VIcon },
}
</script>

<template>
  <section id="blog" class="hero section">
    <div class="hero-body">
      <div class="container">
        <v-columns vcentered hcentered>
          <v-column size="is-full-touch is-half has-text-centered" style="z-index: 1;">
            <p class="title has-text-white">
              Why Vue3-ui?
            </p>
          </v-column>
        </v-columns>
      </div>
    </div>
    <div class="mb-6">
      <v-columns hcentered vcentered class="features" multiline>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              100% Responsive
            </p>
            <div>
              <v-icon custom-class="feature-icon" name="page-layout-body-icon" bundle="icons" />
            </div>
            <span class="has-text-white">
              Designed for <b>mobile</b> first
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Modular
            </p>
            <div>
              <v-icon custom-class="feature-icon" name="apps-icon" bundle="icons" />
            </div>

            <span class="has-text-white">
              Import only the components that you need
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Modern
            </p>
            <div>
              <v-icon custom-class="feature-icon" name="vuejs-icon" bundle="icons" />
            </div>
            <span class="has-text-white">
              Built with Vue 3 and Bulma CSS
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Themeable
            </p>
            <div>
              <v-icon custom-class="feature-icon" name="format-color-fill-icon" bundle="icons" />
            </div>
            <span class="has-text-white">
              Create <a href="/documentation/theming" target="_blank" rel="noopener">themes</a> with CSS variables support
            </span>
          </div>
        </v-column>
        <v-column class="has-text-centered">
          <div class="has-background-black-ter px-5 py-5 has-border">
            <p class="title has-text-white is-size-4">
              Free
            </p>
            <div>
              <v-icon custom-class="feature-icon" name="github-icon" bundle="icons" />
            </div>
            <span class="has-text-white">
              Open source on <b>Github</b>
            </span>
          </div>
        </v-column>
      </v-columns>
    </div>
  </section>
</template>

<style scoped>
.has-border {
  border-left: 0.25rem solid red;
  min-height: 200px;
}
</style>
