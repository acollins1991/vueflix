<template>
<div>
  API testing
</div>
</template>

<script>
export default {
  name: 'APITesting',
  data() {
    return {
      movies: ''
    }
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    async getMovies() {
      this.movies = await this.APIRequest.get("list/1", {
        params: {
          test: 1
        }
      })
        .then((response) => {
          return response.data
        })
    }
  }
}
</script>
