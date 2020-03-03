export default {
  woocomerce: {
    key: process.env.WC_KEY,
    secret: process.env.WC_SECRET
  },
  api: {
    baseURL: 'https://gakondoplayingcards.com/store',
    routes: {
      products: '/wc/v3/products'
    }
  }
}
