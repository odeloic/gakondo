<template>
  <div class="cart">
    <header class="cart__header">
      <h3 class="cart__header__title">Cart</h3>
      <button class="btn btn--outline" @click="hideCart()">Close</button>
    </header>
    <!-- cart header -->
    <div v-if="$store.state.cartStep === 'checkout'" class="cart-wrapper">
      <ul class="cart__list vertical-list">
        <header class="cart__list__header">
          <span class="header__title">Product</span>
          <span class="header__quantity">Quantity</span>
          <span class="header__price">Sub Total</span>
        </header>
        <li
          v-for="element in data"
          :key="element.id"
          class="cart__list__elem vertical-list__elem"
        >
          <CartLineElem :data="element" />
        </li>
      </ul>
      <!-- product list -->
      <!-- total line -->
      <footer class="cart__footer">
        <p class="cart__total-line">
          <span class="total">Total:</span>
          <span class="price">${{ $store.getters.cartTotal }}</span>
        </p>
        <button
          :class="{ disabled: !$store.state.cart.length }"
          class="btn btn--red"
          @click="goToCartNextStep()"
        >
          Proceed to Checkout
        </button>
      </footer>
    </div>
    <!-- cart wrapper -->
    <div v-if="$store.state.cartStep === 'shipping'" class="form-wrapper">
      <CheckoutForm />
    </div>
  </div>
</template>
<script>
import CartLineElem from '@/components/containers/CartLineElem'
import CheckoutForm from '@/components/containers/CheckoutForm'
export default {
  name: 'Cart',
  components: {
    CartLineElem,
    CheckoutForm
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    hideCart() {
      this.$store.state.cartUIStatus === 'visible'
        ? this.$store.commit('updateCartUIStatus', 'idle')
        : this.$store.commit('updateCartUIStatus', 'visible')
    },
    goToCartNextStep() {
      this.$store.state.cartStep === 'checkout'
        ? this.$store.commit('updateCartStep', 'shipping')
        : this.$store.commit('updateCartStep', 'checkout')
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  width: 100%;
  height: 100%;
  padding: 3rem 2.5rem;
  overflow: auto;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    &__title {
      font-size: 1.7rem;
    }
  }

  &__list {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba($color-gray, 0.2);
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba($color-gray, 0.2);
      margin-bottom: 1.5rem;
      width: 100%;
      text-align: right;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 700;
      letter-spacing: 1px;
      &__title {
        flex-basis: 50%;
      }

      &__quantity {
        flex-basis: 25%;
      }

      &__price {
        flex-basis: 25%;
      }
    }
    &__elem {
      &:not(:last-child) {
        margin-bottom: 1.4rem;
      }
    }
  }
  &__total-line {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Bebas Neue', sans-serif;
    .total {
      margin-right: 0.5rem;
      letter-spacing: 1px;
    }
    .price {
      color: $color-secondary;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
