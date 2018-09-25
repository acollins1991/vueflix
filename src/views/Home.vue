<template>
<div>

  <Slider v-for="(genre, index) in this.$store.getters.allCategories" v-bind:key="index" v-bind:genreInfo="genre" />

</div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>
