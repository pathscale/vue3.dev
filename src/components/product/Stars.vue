<script>

const Component = {
  props: ['stars', 'size']
}
export default Component;
</script>
<template>
  <div>
    <i class="icon icon-star" :class="[size, {'has-text-primary': stars >= 1}]" /> 
    <i class="icon icon-star" :class="[size, {'has-text-primary': stars >= 2}]" /> 
    <i class="icon icon-star" :class="[size, {'has-text-primary': stars >= 3}]" /> 
    <i class="icon icon-star" :class="[size, {'has-text-primary': stars >= 4}]" /> 
    <i class="icon icon-star" :class="[size, {'has-text-primary': stars >= 5}]" /> 
  </div>
</template>

<style scoped>
  
</style>


