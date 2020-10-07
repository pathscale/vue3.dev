<script>
import {
  Navbar,
  Cookie,
} from '../components'

const Component = {
  components: {
    Cookie,
    Navbar
  },
  setup() {
    function setDocHeight() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    };
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);
    setDocHeight();
  },
}

export default Component
</script>

<template>
  <div>
    <cookie />
    <navbar />
    <div class="well" id="well">
      <router-view />
    </div>
  </div>
</template>
