export const state = () => ({
  products: [],
  cart: [],
  cartUIStatus: 'idle',
  cartStep: 'checkout'
})

export const getters = {
  cartTotal: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((tot, next) => tot + next.quantity * next.price, 0)
  },
  cartProducts: (state) => {
    const { cart } = state
    if (!cart.length) return []
    return cart.map(({ id, quantity }) => ({ product_id: id, quantity }))
  },
  featuredProduct: (state) => {
    const { products } = state
    return products.find((product) => product.tags[0].name === 'Featured')
  }
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
  addToCart(state, payload) {
    const isItemFound = state.cart.find((product) => product.id === payload.id)
    isItemFound ? isItemFound.quantity++ : state.cart.push(payload)
  },
  updateCartUIStatus(state, status) {
    state.cartUIStatus = status
  },
  updateCartStep(state, step) {
    state.cartStep = step
  }
}
