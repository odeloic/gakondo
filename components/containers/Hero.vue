<template>
  <div class="hero">
    <div class="container">
      <header class="header">
        <div class="logo">
          <img
            src="~assets/images/shield-vertical-white.svg"
            class="logo__img"
          />
          <h2 class="logo__title">Gakondo</h2>
        </div>
        <!-- logo -->
        <nav class="navigation">
          <a class="navigation__link" href="#" @click="toggleCart()"
            ><span>View Cart</span
            ><font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              class="icon--small cart-icon"
          /></a>
        </nav>
        <!-- navigation -->
      </header>
      <div class="intro">
        <div class="intro__text">
          <h2 class="intro__text__header">
            <span class="intro__text__header__top">
              Inspired by
            </span>
            <span class="intro__text__header__bottom">
              Rwanda's Heritage
            </span>
          </h2>
          <!-- intro text header -->
          <p>
            Gakondo is a Rwandan brand dedicated to establishing a creative and
            interactive culture to create strong ties between families and
            society as a whole.
          </p>

          <button class="btn btn--outline btn--outline--white">
            see our catalog
          </button>
        </div>
        <div
          class="intro__img"
          style="background-image: url('/images/gakondo-both.png')"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hero',
  methods: {
    toggleCart() {
      this.$store.state.cartUIStatus === 'idle'
        ? this.$store.commit('updateCartUIStatus', 'visible')
        : this.$store.commit('updateCartUIStatus', 'idle')
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  padding: 5rem 0;
  background-color: $color-black;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('~assets/images/wallpaper-art.png');
    background-size: contain;
  }
  &__footer {
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    width: 100%;
  }
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;

  &__img {
    width: 3rem;
    margin-right: 1.5rem;
  }

  &__title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.3rem;
    color: $color-primary--lightest;
  }
}

.navigation {
  display: flex;
  align-items: center;

  &__link {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    color: $color-primary--lightest;
    font-weight: 700;

    span {
      margin-right: 1.4rem;
    }
  }

  .cart-icon {
    color: $color-primary--lightest;
  }
}

.intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  flex-wrap: wrap;

  &__text {
    flex-basis: 50%;
    p {
      font-size: 1.4rem;
      line-height: 1.8;
      color: $color-primary--lightest;
      margin-bottom: 3rem;
    }
    &__header {
      font-size: 6rem;
      font-family: 'Bebas Neue', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 2rem;
      &__top {
        color: $color-primary--light;
      }
      &__bottom {
        color: $color-primary;
      }
    }
  }

  &__img {
    flex-basis: 50%;
    height: 50rem;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
