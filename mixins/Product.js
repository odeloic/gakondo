import parseHTMLString from '@/helpers/parseHTMLString'
const Product = {
  mounted() {
    console.log(this)
  },
  methods: {
    getText(el) {
      return parseHTMLString(el)
    },
    selectProduct(product) {
      this.$store.commit('setSelectedProduct', product)
    }
  }
}

export default Product
