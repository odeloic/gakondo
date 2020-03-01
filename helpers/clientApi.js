// import axios from '@nuxtjs/axios'
// import config from '@/assets/config'
// import axios from 'axios'

// export const clientApi = ({ $axios }, method, route, params = {}) => {
//   const newAxiosInstance = this.$axios.create({})
//   console.log(newAxiosInstance)
// }

export default ($axios) => ({
  getProducts() {
    console.log('List all products')
  }
})
