<template>
  <div class="featured-product">
    <span class="featured-product__banner">Featured product</span>
    <div class="flx-container flx-container--horizontal">
      <div class="flx-container__elm--half">
        <img :src="data.images[0].src" alt="" class="featured-product__img" />
      </div>
      <div class="flx-container__elm--half">
        <h3 class="featured-product__title">{{ data.name }}</h3>
        <span class="featured-product__price">${{ data.regular_price }}</span>
        <p class="featured-product__description">
          {{ getDescription(data.description) }}
        </p>
        <button class="btn btn--red" @click.prevent="selectProduct(data)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { parseHTMLString } from '@/helpers/parseHTMLString'
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getDescription(el) {
      return parseHTMLString(el)
    },
    selectProduct(product) {
      this.$store.commit('setSelectedProduct', product)
    }
  }
}
</script>
<style lang="scss" scoped>
.featured-product {
  position: relative;
  padding-top: 2.5rem;
  &__banner {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    background-color: $color-secondary;
    color: #ffffff;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.8px;
  }
  &__img {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
  }

  &__title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: $color-primary;
    font-size: 3rem;
    letter-spacing: 1.2px;
    margin-bottom: 1.5rem;
  }

  &__price {
    font-family: 'Bebas Neue', sans-serif;
    color: $color-secondary;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: inline-block;
  }

  &__description {
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 3rem;
    color: $color-gray;
  }
}
</style>
