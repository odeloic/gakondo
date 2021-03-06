// import $axios from '@nuxtjs/axios'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import config from '@/assets/config'

const api = new WooCommerceRestApi({
  url: config.api.baseURL,
  consumerKey: config.woocomerce.key,
  consumerSecret: config.woocomerce.secret,
  version: 'wc/v3'
})

export const getProducts = () => {
  return api.get('products')
}

export const createOrder = (orderParams) => {
  api
    .post('orders', orderParams)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.response.data))
}
