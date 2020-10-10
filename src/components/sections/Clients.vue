<script>
import { VButton, VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'
import { ref } from 'vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'DevClients',
  components: { VButton, VColumns, VColumn, Carousel, Slide, Pagination, Navigation },
  setup() {
    const intl = useI18n()
    const isLandscape = ref(window.matchMedia('(orientation: landscape)').matches)
    window.addEventListener('orientationchange', () => {
      isLandscape.value = !isLandscape.value
    })

    const projects = [
      {
        title: 'Space Revenge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ornare mi. Vestibulum finibus, mi iaculis vulputate vehicula, nisl nunc venenatis nisl, id fringilla turpis diam eget dolor. Cras lobortis lectus nibh, eu facilisis sapien suscipit sed',
        image: 'https://spacerevenge--game.b-cdn.net/battle.webp',
        link: 'https://www.revenge.game/',
        button: 'Spacerevenge.game'
      },
      {
        title: 'Social.soy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ornare mi. Vestibulum finibus, mi iaculis vulputate vehicula, nisl nunc venenatis nisl, id fringilla turpis diam eget dolor. Cras lobortis lectus nibh, eu facilisis sapien suscipit sed',
        image: 'https://spacerevenge--game.b-cdn.net/chat.webp',
        link: 'https://social.soy/',
        button: 'Social.soy'
      }
    ]
    return { intl, isLandscape, projects }
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
        <carousel>
          <slide v-for="(client, index) in projects" :key="index" :items-to-show="1.5" wrap-around initial-slide="1">
            <v-columns :mobile="isLandscape" vcentered class="reverse-columns px-2">
              <v-column class="has-text-centered" style="width: 100%">
                <img :src="client.image" :ref="client.title" />
                <v-button
                  tag="a"
                  :href="client.link"
                  target="_blank"
                  rel="noopener"
                  class="mt-6 is-size-6 is-size-7-touch is-hidden-desktop is-hidden-fullhd"
                  rounded
                  type="is-white"
                  size="is-medium">
                  {{ client.button }}
                </v-button>
              </v-column>
              <v-column size="is-full-touch is-half">
                <p class="subtitle has-text-white">
                  {{ client.title }}
                </p>
                <p class="has-text-white">
                  {{ client.description }}
                </p>
                <v-button
                  tag="a"
                  :href="client.link"
                  target="_blank"
                  rel="noopener"
                  class="mt-6 is-size-6 is-size-7-touch is-hidden-touch"
                  rounded
                  type="is-white"
                  size="is-medium">
                  {{ client.button }}
                </v-button>
              </v-column>
            </v-columns>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>
