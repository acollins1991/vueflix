<template>
  <div class="home">
    Home
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    this.$APIRequest.get('list/1', {test:'test'})
  }
}
</script>
