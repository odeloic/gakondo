export default {
  woocomerce: {
    key: process.env.consumerKey,
    secret: process.env.consumerSecret
  },
  api: {
    baseURL: 'https://gakondoplayingcards.com/store',
    routes: {
      products: '/wc/v3/products'
    }
  }
}
