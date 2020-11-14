<script>
import { VColumns, VColumn, VImage } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'


export default {
  name: 'DevClients',
  components: { VColumns, VColumn, VImage },
  setup() {
    const intl = useI18n()


    const projects = [
      {
        title: 'Pathscale.com',
        image: `/pathscale.webp`,
        link: 'https://www.pathscale.com/'
      },
      {
        title: 'Revenge.game',
        image: `/revenge.webp`,
        link: 'https://www.revenge.game/'
      },
      {
        title: 'SpaceRevenge.game',
        image: `/space.webp`,
        link: 'https://www.spacerevenge.game/'
      },
      {
        title: 'Vue3.dev',
        image: `/vue3.dev.webp`,
        link: 'https://vue3.dev/'
      }
    ]
    return { intl, projects }
  }
}
</script>

<template>
  <section class="hero section" id="client">
    <div class="hero-body">
      <div class="container">
        <p class="title has-text-white has-text-centered">
          {{ intl.$ts('clients.title') }}
        </p>
        <v-columns vcentered class="reverse-columns px-2">
          <v-column v-for="(client, index) in projects" :key="index" class="has-text-centered mx-2" size="is-4">
            <a :href="client.link">
              <v-image :data-src="client.image" :ref="client.title" custom-class="is-fullwidth" />
            </a>
          </v-column>
        </v-columns>
      </div>
    </div>
  </section>
</template>
