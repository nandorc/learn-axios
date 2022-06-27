import axios from 'axios';

export default function PostRequest() {
  axios.post('/post', {
    firstName: 'Nando'
  })
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .then(() => console.log('Request finished'))
}