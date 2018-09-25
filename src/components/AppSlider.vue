<template>
<div class="AppSlider px-5 py-3 mb-4">
  {{sliderInfo.name}}
</div>
</template>

<script>
export default {
  name: 'AppSlider',
  props: ['sliderInfo'],
  data() {
    return {
      media: []
    }
  },
  mounted() {

    this.media = this.APIRequest('/discover/movie/', {
      method: 'post',
      params: {
        with_genres: this.sliderInfo.id,
        page: 1
      }
    }).then((response) => {
      return result
    })

  }
}
</script>
