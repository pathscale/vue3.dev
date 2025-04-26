<script>
export default {
  name: "DevFooter",
};
</script>

<template>
  <footer class="footer pb-5 has-background-dark">
    <div class="content has-text-centered">
      <p class="has-text-light mt-6">
        <strong class="has-text-light">{{ new Date().getFullYear() }} ©</strong>
        by PathScale Pte Ltd Version: {{ process.env.VUE_APP_VERSION_NUMBER }}
      </p>
    </div>
  </footer>
</template>
