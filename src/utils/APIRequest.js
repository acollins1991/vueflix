import axios from 'axios'
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
      paramsSerializer: function(params) {
        return qs.stringify(params)
      }
    })
    // make instance available under this.axiosRequest
    this.axiosRequest = axiosRequest

  }

  instance() {

    return this.axiosRequest

  }

}
