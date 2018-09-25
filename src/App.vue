<template>
<div id="app">
  <AppHeader/>
  <router-view />
  <AppFooter/>
  <TMDBLogo/>
</div>
</template>

<script>
import AppHeader from '@/components/Global/AppHeader.vue'
import AppFooter from '@/components/Global/AppFooter.vue'
import TMDBLogo from '@/components/Global/TMDBLogo.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    TMDBLogo
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/app.scss'
</style>
