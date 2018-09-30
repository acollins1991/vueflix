<template>
<div>

  <AppBanner />

  <div class="AppSlider__minus-margin">

    <AppSlider v-for="(genre, index) in this.$store.getters.allCategories" v-bind:key="index" v-bind:sliderInfo="genre" />

  </div>


</div>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue'
import AppSlider from '@/components/AppSlider.vue'

export default {
  name: 'home',
  components: {
    AppBanner,
    AppSlider
  }
}
</script>
