import axios from 'axios'
import { API_URI } from '../../assets/constants'

export default function SendQueryParams() {
  axios.get(API_URI + 'character', {
    params: {
      page: 10
    }
  })
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .then(() => console.log('Request finished'))
}