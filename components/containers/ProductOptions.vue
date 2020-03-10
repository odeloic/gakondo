<template>
  <div class="product-options">
    <button class="close-button" @click="closeModal()">
      <font-awesome-icon
        :icon="['fas', 'times-circle']"
        class="close-button__icon"
      />
    </button>
    <h3 class="product-options__title">{{ data.name }}</h3>
    <h4>How many ?</h4>
    <div class="quantity-selector">
      <button class="increase">
        <font-awesome-icon
          :icon="['fas', 'plus']"
          class="plus-icon"
          @click.prevent="increaseQuantity"
        />
      </button>
      <input v-model="quantity" type="number" />
      <button class="decrease">
        <font-awesome-icon
          :icon="['fas', 'minus']"
          class="minus-icon"
          @click.prevent="decreaseQuantity"
        />
      </button>
    </div>
    <p class="price">Price: ${{ price }}</p>
    <button class="btn btn--outline" @click.prevent="addProductToCart(data)">
      Add to cart
    </button>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    price() {
      return this.quantity * this.data.price
    }
  },
  methods: {
    increaseQuantity() {
      this.quantity++
    },
    decreaseQuantity() {
      this.quantity--
    },
    addProductToCart(product) {
      const newProduct = { ...product, quantity: this.quantity }
      this.$store.commit('addToCart', newProduct)
      this.$store.commit('deSelectProduct')
    },
    closeModal() {
      this.$store.commit('deSelectProduct')
    }
  }
}
</script>
<style lang="scss" scoped>
.product-options {
  background-color: #ffffff;
  width: 30rem;
  min-height: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem 0rem;
  position: relative;

  .close-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    &__icon {
      font-size: 3rem;
      color: $color-secondary;
    }
  }

  .close-icon &__title {
    font-size: 1.6rem;
    color: $color-secondary;
  }

  h4 {
    font-size: 1.3rem;
    letter-spacing: 0.5px;
  }
}

.quantity-selector {
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 5rem;
    padding: 1rem 0.5rem;
    margin: 0rem 2rem;
    text-align: center;
  }
}
</style>
