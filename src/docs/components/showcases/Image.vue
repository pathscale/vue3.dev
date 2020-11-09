<script>
export default {
  name: 'DevShowcaseImage'
}
</script>

<template>
  <img data-src="./128x128.png" alt="only data-src" />
  <img src="#" data-src="./128x128.png" alt="src # and data-src" />
  <img src="./128x128.png" alt="only src" />
  <img src="./128x128.png" data-src="./128x128.png" alt="src and data-src" />
  <v-image src="https://vue3--dev.b-cdn.net/128x128.png"
           alt="placeholder image"
           size="is-128x128" rounded centered />
</template>
