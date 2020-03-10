<template>
  <div class="home">
    <div
      v-if="$store.state.cartUIStatus === 'visible'"
      :class="{ visible: $store.state.cartUIStatus === 'visible' }"
      class="cart-container"
    >
      <Cart :data="$store.state.cart" />
    </div>
    <Hero />
    <!-- Hero -->
    <section class="section section--white">
      <div class="section__title"><h3>Our Products</h3></div>
      <div class="container">
        <div class="featured-product-container">
          <FeaturedProduct :data="featuredProduct" />
        </div>
      </div>
      <div class="products-container">
        <ProductsList :data="$store.state.products" />
      </div>
    </section>
    <section class="footer section section--green">
      <div class="container">
        <div
          class="flx-container flx-container--horizontal flx-container--align-start"
        >
          <div class="flx-container__elm--third">
            <h3 class="mg-bottom--small color-white">
              Find our products near you
            </h3>
            <ul class="vertical-list">
              <li class="vertical-list__elem">
                <div class="place color-white">
                  <h4 class="place__title">ONOMO Hotels</h4>
                  <span class="place__address">Kigali, Nyarugenge St 1345</span>
                  <span class="place__contact">+245088990</span>
                </div>
              </li>
              <li class="vertical-list__elem">
                <div class="place color-white">
                  <h4 class="place__title">Rwandair Duty Free</h4>
                  <span class="place__address">Kigali, Nyarugenge St 1345</span>
                  <span class="place__contact"
                    ><a href="#">Visit Website</a></span
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class="flx-container__elm--third">
            <h3 class="mg-bottom--small color-white">
              Follow us on social Media
            </h3>
          </div>
          <div class="flx-container__elm--third">
            <h3 class="mg-bottom--small color-white">
              Contact us
            </h3>
          </div>
        </div>
      </div>
      <div class="shields-wrapper">
        <Shields :color="'white'" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from '@/components/containers/Hero'
import ProductsList from '@/components/containers/ProductsList'
import Shields from '@/components/ui/Shields'
import Cart from '@/components/containers/Cart'
import FeaturedProduct from '@/components/containers/FeaturedProduct'
import { getProducts } from '@/helpers/clientApi'

export default {
  components: {
    Hero,
    ProductsList,
    Shields,
    Cart,
    FeaturedProduct
  },
  async fetch({ store }) {
    // const { data } = await getProducts()
    await getProducts()
      .then(({ data }) => store.commit('setProducts', data))
      .catch((error) => console.log(error))
  },
  computed: {
    ...mapGetters(['featuredProduct'])
  },
  mounted() {
    console.log('CONSUMER KEY: ', process.env.consumerKey)
    console.log('CONSUMER SECRET: ', process.env.consumerSecret)
  },
  head() {
    return {
      script: [
        {
          src:
            'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}

.cart-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 28rem;
  height: 100%;
  background-color: $color-gray--light;
  z-index: 6;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
}
.footer {
  position: relative;

  h3 {
    font-size: 2.4rem;
  }
}

.shields-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.place {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.3rem;
  }
}

.featured-product-container {
  margin-bottom: 5rem;
}
</style>
