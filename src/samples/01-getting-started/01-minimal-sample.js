import axios from 'axios'
import { API_URI } from '../../assets/constants'

export default function MinimalSample() {
  axios.get(API_URI)
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .then(() => console.log('Request finished'))
}