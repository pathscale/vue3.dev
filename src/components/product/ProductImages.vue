<script>
import { useI18n } from "vue-composable";

// eslint-disable-next-line import/no-unresolved -- components does not exist in npm yet
import { VColumns, VColumn } from "@pathscale/vue3-ui"

import { ref } from 'vue'


const Component = {
  components: { VColumns, VColumn},
  props: ['images'],
  setup(props) {
    const main = ref(props.images[0]);
    const intl = useI18n();
    function zoom(e) {
      const zoomer = e.currentTarget;
      let offsetX, offsetY;
      e.offsetX ? {offsetX} = e : offsetX = e.touches[0].pageX;
      e.offsetY ? {offsetY} = e : offsetX = e.touches[0].pageX;
      const x = offsetX / zoomer.offsetWidth * 100;
      const y = offsetY / zoomer.offsetHeight * 100;
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
    return { intl, zoom, main}
  }
}
export default Component;
</script>
<template>
  <div>
    <figure class="zoom" :onmousemove="zoom" :style="`background-image: url('${main}'); background-position: 96.4% 52.669%;`">
      <img :src="main" />
    </figure>
    <v-columns mobile gapless class="py-1">
      <v-column v-for="(image, index) in images" :key="index">
        <a>
          <img class="pr-1" :src="image" @click="main = image" />
        </a>
      </v-column>
    </v-columns>
  </div>
</template>

<style>
  figure.zoom {
    background-position: 50% 50%;
    position: relative;]
    overflow: hidden;
    cursor: zoom-in;
  }
  figure.zoom img:hover {
    opacity: 0;
  }
  figure.zoom img {
    transition: opacity .5s;
    display: block;
    width: 100%;
  }
</style>