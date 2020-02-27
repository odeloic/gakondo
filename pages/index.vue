<template>
  <div class="home">
    <Hero />
    <!-- Hero -->
    <section class="section section--white">
      <div class="container">
        <div class="flx-container flx-container--horizontal">
          <div
            class="img-cover flx-container__elm--half bg-contain"
            style="background-image: url('/cards-deck.png');"
          ></div>
          <div class="flx-container__elm--half">
            <div class="text-block">
              <h2 class="text-block__heading">OUR STORY</h2>
              <p>
                Gakondo is a Rwandan brand dedicated to establishing a creative
                and interactive culture to create strong ties between families
                and society as a whole. At Gakondo we create playing cards and
                boardgames/table games.
              </p>
              <p>
                Our unique designs are made in Rwanda with an aim to generate a
                customized experience by using cultural elements of our society
                to convey a story and educate the players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--no-padding section--gray">
      <ProductsList />
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
import Hero from '@/components/containers/Hero'
import ProductsList from '@/components/containers/ProductsList'
import Shields from '@/components/ui/Shields'

export default {
  components: {
    Hero,
    ProductsList,
    Shields
  }
}
</script>

<style lang="scss" scoped>
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
</style>
