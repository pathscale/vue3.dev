<script>
import { VButton, VField, VImage, VMedia, VTextarea } from "@pathscale/vue3-ui";

export default {
  name: "DevShowcaseMedia",
  components: { VMedia, VImage, VTextarea, VField, VButton },
};
</script>

<template>
  <v-media>
    <template #left>
      <v-image
size="is-64x64" rounded
               src="https://avatars0.githubusercontent.com/u/29805241?s=460&u=efe58fc5bb0ee7ad11fb7fc976820a7cda3f0c77&v=4" />
    </template>
    <template #content>
      <div class="content">
        <p>
          <strong>Oscar Albornoz</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.
          <br /> Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        </p>
      </div>

      <v-media>
        <template #left>
          <v-image
size="is-48x48" rounded
                   src="https://avatars0.githubusercontent.com/u/17007165?s=460&u=45b8448bece9d199a3096a07a0ff90e25530802b&v=4" />
        </template>
        <template #content>
          <div class="content">
            <p>
              <strong>Radu Pasparuga</strong>
              <br />
              Morbi tellus est, consectetur sit amet dui facilisis, imperdiet pellentesque lorem
              <br />
              Mauris sit amet velit commodo, semper felis sed, sodales ante.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </div>
        </template>
      </v-media>

      <v-media>
        <template #left>
          <v-image
size="is-48x48" rounded
                   src="https://avatars2.githubusercontent.com/u/7198245?s=460&u=2321a42481df6e8609933a1dcba15fe60caed2e7&v=4" />
        </template>
        <template #content>
          <div class="content">
            <p>
              <strong>David Cedres</strong>
              <br />
              Proin pulvinar dolor in turpis elementum ornare. Quisque efficitur malesuada ultrices.
              <br />
              Cras sem est, pulvinar ac rutrum eu, varius ac quam.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </div>
        </template>
      </v-media>
    </template>
  </v-media>
  <v-media>
    <template #left>
      <v-image
size="is-64x64" rounded
               src="https://avatars3.githubusercontent.com/u/11345792?s=460&u=497fb860444eef3f36843047804181c35ff9a763&v=4" />
    </template>
    <template #content>
      <v-field>
        <v-textarea placeholder="Add a comment Anton Kudryavtsev" />
      </v-field>
      <v-field>
        <v-button type="is-info">
          Post comment
        </v-button>
      </v-field>
    </template>
  </v-media>
</template>
