import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {
      movies: [],
      tv: []
    }
  },
  getters: {
    allCategories(state){

      const movies = state.categories.movies
      const tv = state.categories.tv
      const all = movies.concat(tv)

      return all

    }
  }
})
