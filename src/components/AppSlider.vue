<template>
<div class="AppSlider mb-4">
  <div class="px-5">
    <h2 class="h5 text-white">{{sliderInfo.name}}</h2>
    <tiny-slider :items="5" :gutter="100">
      <div>Slider item #1</div>
      <div>Slider item #2</div>
      <div>Slider item #3</div>
      <div>Slider item #4</div>
      <div>Slider item #5</div>
      <div>Slider item #6</div>
    </tiny-slider>
  </div>
</div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'

export default {
  name: 'AppSlider',
  props: ['sliderInfo'],
  components: {
    'tiny-slider': VueTinySlider
  },
  data() {
    return {
      media: [],
      sliderPage: 1,
      dummy: [{
          "_id": "5bab8b78f24ec390b4eb4af9",
          "name": "commodo ea",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78b1e375b10809934c",
          "name": "dolor pariatur",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78c41c89dab3268ced",
          "name": "minim adipisicing",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78c7398a66af3311ee",
          "name": "excepteur ad",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78279078740bc0004d",
          "name": "et duis",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78af29e9d47331e5c7",
          "name": "sint voluptate",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b783eac573219ead15d",
          "name": "adipisicing excepteur",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b786ca6f4d6aa88ea86",
          "name": "occaecat est",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78c038269938798f06",
          "name": "sit cupidatat",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b788ae5e1940f2b6a1f",
          "name": "ipsum do",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78ddfa867701d14962",
          "name": "adipisicing occaecat",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78e8f0a0201de9542a",
          "name": "nulla id",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b7820f0dbfb1b4c5e19",
          "name": "duis exercitation",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78cffc065b5f4ed145",
          "name": "aliqua cillum",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b78a291127dc0ddefa9",
          "name": "ad commodo",
          "picture": "http://placehold.it/32x32"
        },
        {
          "_id": "5bab8b788f89275a7a2f06c0",
          "name": "exercitation labore",
          "picture": "http://placehold.it/32x32"
        }
      ]
    }
  },
  mounted() {

    /* to be uncommented once ajax call is fixed
    // get movies/tv
    this.media = this.APIRequest('/discover/movie/', {
      method: 'get',
      params: {
        with_genres: this.sliderInfo.id,
        page: 1
      }
    }).then((response) => {
      return result
    })
    */

  }
}
</script>
