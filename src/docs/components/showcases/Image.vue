<script>
export default {
  name: 'DevShowcaseImage'
}
</script>

<template>
  <p class="title">
    Relative path
  </p>
  <img data-src="./128x128.png" alt="1 only data-src" />
  <img src="#" data-src="./128x128.png" alt="1 src # and data-src" />
  <img src="./128x128.png" alt="3 only src" />
  <img src="./128x128.png" data-src="./128x128.png" alt="4 src and data-src" />
</template>
