<script>
import { VCard, VImage, VCardContent, VCardHeader, VCardFooter, VCardFooterItem, VMedia, VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'DevShowcaseCard',
  components: { VCard, VImage, VCardContent, VCardHeader, VCardFooter, VCardFooterItem, VMedia, VColumns, VColumn }
}
</script>

<template>
  <v-columns>
    <v-column size="is-3">
      <v-card>
        <v-card-header title="User" />
        <v-image src="https://vue3.dev/128x128.png" alt="placeholder image" />
        <v-card-content>
          <v-media>
            <template #left>
              <v-image src="https://vue3.dev/128x128.png" size="is-48x48" rounded alt="placeholder image" />
            </template>
            <template #content>
              <p class="title is-4">
                John Smith
              </p>
              <p class="subtitle is-6">
                @johnsmith
              </p>
            </template>
          </v-media>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@vue3-ui</a>.
            <a href="#">#vue3</a> <a href="#">#responsive</a>
            <br />
          </div>
        </v-card-content>

        <v-card-footer>
          <v-card-footer-item>
            <time datetime="2020-5-8">11:22 PM - 5 Oct 2020</time>
          </v-card-footer-item>
        </v-card-footer>
      </v-card>
    </v-column>
  </v-columns>
</template>
