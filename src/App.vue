<template>
<div id="app" class="bg-dark">
  <AppHeader />
  <router-view />
  <AppFooter />
  <TMDBLogo />
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
  },
  mounted() {
    var self = this
    this.APIRequest.get('/genre/movie/list')
      .then((response) => {
        console.log(response)
        self.$store.state.categories.movies = response.data.genres
      })
    this.APIRequest.get('/genre/tv/list')
      .then((response) => {
        self.$store.state.categories.tv = response.data.genres
      })
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/app.scss'
</style>
