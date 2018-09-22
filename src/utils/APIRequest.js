import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

const apiBase = 'https://api.themoviedb.org/3/'
const apiKey = '212f13bd4e17e3536f24b2300c2bea92'

class APIRequestClass {

  constructor(endpoint, parameters) {

    // get endpoint
    this.endpoint = endpoint
    // get parameters object
    this.parameters = parameters
    // set api_key parameters
    this.params = {
      api_key: apiKey
    }
    // add parameters arguement object to this.params object
    this.params = Object.assign(this.params, this.parameters)
    // stringify parameters
    this.paramsString = qs.stringify(this.params)

  }

  get(endpoint) {

    // construct config
    this.config = {
      method: 'get',
      baseURL: apiBase,
      url: endpoint + '?' + this.paramsString
    }

    axios(this.config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))

  }

}

const APIRequest = {
  install(Vue, options) {
    Vue.prototype.$APIRequest = new APIRequestClass
  }
}

export default APIRequest
