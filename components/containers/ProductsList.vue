<template>
  <div class="products">
    <ul class="products-list">
      <li
        v-for="product in data"
        :key="product.id"
        class="products-list__elm"
        @click="setVisibleProduct(product)"
      >
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
            <!-- <p class="product__description" v-html="product.description"></p> -->
            <span class="product__price">${{ product.regular_price }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="products__active-product">
      <img :src="activeProduct.images[0].src" class="product-img" />
      <!-- <p v-html="activeProduct.description"></p> -->
      <!-- <ul>
        <li>
          - High end: Our cards are printed from some of the best printing
          companies in the world
        </li>
        <li>
          - Custom Art: Every detail has been carefully designed with passion to
          create an original artwork
        </li>
      </ul> -->
      <button class="btn btn--red" @click="addProductToCart(activeProduct)">
        Add to cart
      </button>
    </div>
  </div>
</template>
<script>
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
  // computed: {
  //   activeProduct() {
  //     return this.data[0]
  //   }
  // },
  methods: {
    setVisibleProduct(product) {
      this.activeProduct = product
    },
    addProductToCart(product) {
      const newProduct = { ...product, quantity: 1 }
      this.$store.commit('addToCart', newProduct)
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.products-list {
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__elm {
    width: 100%;
    &:not(:last-child) {
      border-bottom: 1px solid rgba($color-gray, 0.1);
    }
  }
}

.products__active-product {
  flex: 1;
  padding: 5rem;
  background-color: $color-gray--light;
  display: flex;
  flex-direction: column;
  align-items: center;

  .product-img {
    width: 30rem;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba($color-gray, 0.7);
    margin-bottom: 1rem;
  }

  ul li {
    font-size: 1.2rem;
    color: rgba($color-gray, 0.7);
  }

  .btn {
    margin-top: 2rem;
  }
}

.product {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 4rem 2.8rem;
  background-color: #ffffff;

  &--active {
    background-color: $color-primary--lightest;
  }

  &__img {
    background-size: contain;
    height: 10rem;
    width: 15rem;
    background-repeat: no-repeat;
  }

  &__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: $color-secondary;
    margin-bottom: 0.1rem;
  }

  &__description {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    color: $color-gray;
  }

  &__price {
    color: $color-primary;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Bebas Neue', sans-serif;
  }
}
</style>
