<template>
  <div class="hero">
    <div class="container">
      <header class="header">
        <div class="logo">
          <img src="/shield-black-vertical.svg" class="logo__img" />
          <h2 class="logo__title">Gakondo</h2>
        </div>
        <!-- logo -->
        <nav class="navigation">
          <a class="navigation__link" href="#">Shop</a>
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

          <button class="btn btn--outline">see our catalog</button>
        </div>
        <div
          class="intro__img"
          style="background-image: url('/cards-deck.png')"
        ></div>
      </div>
    </div>
    <div class="hero__footer">
      <Shields />
    </div>
  </div>
</template>
<script>
import Shields from '../ui/Shields'
export default {
  name: 'Hero',
  components: {
    Shields
  }
}
</script>
<style lang="scss" scoped>
.hero {
  padding: 5rem 0;
  background-color: $color-primary--lightest;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/wallpaper-art.png');
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
  }
}

.navigation {
  display: flex;
  align-items: center;

  &__link {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: $color-primary;
    font-weight: 700;
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
      color: $color-gray;
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
