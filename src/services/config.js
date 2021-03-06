import axios from 'axios'

axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`}


export default {
  instance: axios.create({
    baseURL: 'api/',
    timeout: 10000,
    params: {
      id: 37880978,
      updateTime: -1
    }
  })
}
