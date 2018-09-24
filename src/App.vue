<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <div class="footer">
    <TMDBLogo/>
  </div>
</div>
</template>

<script>
import TMDBLogo from '@/components/Global/TMDBLogo.vue'

export default {
  components: {
    TMDBLogo
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/app.scss'
</style>
