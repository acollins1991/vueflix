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
      this.movies = await this.APIRequest('/discover/movie/', {
        params: {
          sort_by: 'popularity.desc',
          page: 1
        }
      })
        .then((response) => {
          console.log(response)
          return response.data
        })
    }
  }
}
</script>
