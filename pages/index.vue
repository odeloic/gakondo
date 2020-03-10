<template>
  <div class="home">
    <div
      v-if="$store.state.cartUIStatus === 'visible'"
      :class="{ visible: $store.state.cartUIStatus === 'visible' }"
      class="cart-container"
    >
      <Cart :data="$store.state.cart" />
    </div>
    <div v-if="$store.state.isProductSelected" class="product-wrapper">
      <ProductOptions :data="$store.state.selectedProduct" />
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
                  <h4 class="place__title">Question Coffee</h4>
                  <span class="place__address">KG 8 Ave, Kigali, Rwanda</span>
                  <span class="place__contact">+250 781 968 027</span>
                </div>
              </li>
              <li class="vertical-list__elem">
                <div class="place color-white">
                  <h4 class="place__title">Kijami Table</h4>
                  <span class="place__address"
                    >10 KG 9 Ave, Kigali, Rwanda</span
                  >
                  <span class="place__contact">+250 789 512 238</span>
                </div>
              </li>
              <li class="vertical-list__elem">
                <div class="place color-white">
                  <h4 class="place__title">Shokola Café</h4>
                  <!-- <span class="place__address">10 KG 9 Ave, Kigali, Rwanda</span> -->
                  <span class="place__contact">+250 783 093 039</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="flx-container__elm--third">
            <h3 class="mg-bottom--small color-white">
              Follow us on social Media
            </h3>
            <ul class="horizontal-list social-media-icons">
              <li class="horizontal-list__elem social-media-icons__icon">
                <a href="#" title="Facebook"
                  ><font-awesome-icon
                    :icon="['fab', 'facebook']"
                    class="icon--medium"
                /></a>
              </li>
              <li class="horizontal-list__elem social-media-icons__icon">
                <a href="#" title="Twitter"
                  ><font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="icon--medium"
                /></a>
              </li>
              <li class="horizontal-list__elem social-media-icons__icon">
                <a href="#" title="Instagram"
                  ><font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="icon--medium"
                /></a>
              </li>
            </ul>
          </div>
          <div class="flx-container__elm--third">
            <h3 class="mg-bottom--small color-white">
              Contact information
            </h3>
            <p class="contact-info">
              <span class="contact-info__elem"
                ><font-awesome-icon
                  :icon="['fas', 'phone-alt']"
                  class="icon--small contact-info__icon"
                />
                +250788473949</span
              >
              <span class="contact-info__elem"
                ><font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="icon--small contact-info__icon"
                />
                maxime@weadd.design</span
              >
            </p>
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
import ProductOptions from '@/components/containers/ProductOptions'
import { getProducts } from '@/helpers/clientApi'

export default {
  components: {
    Hero,
    ProductsList,
    Shields,
    Cart,
    FeaturedProduct,
    ProductOptions
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

.social-media-icons {
  &__icon {
    a {
      color: $color-primary--lightest;
    }
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__elem {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: $color-primary--lightest;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  &__icon {
    margin-right: 1.4rem;
  }
}
.product-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color-primary, 0.9);
  top: 0;
  left: 0;
  z-index: 9;
}
</style>
