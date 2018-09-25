import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import qs from 'qs'

const apiBase = 'https://api.themoviedb.org/3/'
const apiKey = '212f13bd4e17e3536f24b2300c2bea92'

export default class APIRequest {

  constructor() {

    // custom instance defaults
    let axiosRequest = axios.create({
      baseURL: apiBase,
      params: {
        api_key: apiKey,
        language: 'en-US'
      },
      adapter: jsonpAdapter,
      jsonpCallback: 'test'
    })
    // make instance available under this.axiosRequest
    this.axiosRequest = axiosRequest

  }

  instance() {

    return this.axiosRequest

  }

}
