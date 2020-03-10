<template>
  <div class="products">
    <ul class="products-list">
      <li v-for="product in data" :key="product.id" class="products-list__elm">
        <div
          :class="{ 'product--active': activeProduct.id === product.id }"
          class="product"
        >
          <div
            class="product__img"
            :style="`background-image: url('${product.images[0].src}');`"
          ></div>
          <div class="product__meta">
            <h4 class="product__title">{{ product.name }}</h4>
            <span class="product__price">${{ product.regular_price }}</span>
            <p class="product__description">
              {{ getText(product.description) }}
            </p>
            <button
              class="btn btn--red"
              @click.prevent="selectProduct(product)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </li>
    </ul>
    <!-- <div class="products__active-product">
      <img :src="activeProduct.images[0].src" class="product-img" />
      <p>
        {{ getText(activeProduct.description) }}
      </p>
      <button class="btn btn--red" @click="addProductToCart(activeProduct)">
        Add to cart
      </button>
    </div> -->
  </div>
</template>
<script>
import { parseHTMLString } from '@/helpers/parseHTMLString'
export default {
  name: 'ProductsList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeProduct: this.data[0]
    }
  },
  methods: {
    setVisibleProduct(product) {
      this.activeProduct = product
    },
    addProductToCart(product) {
      const newProduct = { ...product, quantity: 1 }
      this.$store.commit('addToCart', newProduct)
    },
    getText(el) {
      return parseHTMLString(el)
    },
    selectProduct(product) {
      this.$store.commit('setSelectedProduct', product)
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  width: 100%;
}

.products-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;

  &__elm {
    flex-basis: calc(100% / 3);
    &:not(:last-child) {
      // border-bottom: 1px solid rgba($color-gray, 0.1);
    }
  }
}

.product {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 4rem 2.8rem;

  &--active {
    // background-color: $color-primary--lightest;
  }

  &__img {
    background-size: contain;
    height: 10rem;
    width: 15rem;
    background-repeat: no-repeat;
    margin-right: 2rem;
    background-position: center;
  }

  &__title {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    color: $color-primary;
    margin-bottom: 1rem;
    letter-spacing: 0.6px;
  }

  &__description {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    color: $color-gray;
  }

  &__price {
    color: $color-secondary;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Bebas Neue', sans-serif;
    display: inline-block;
    margin-bottom: 1rem;
  }
}
</style>
