<template>
  <form class="checkout-form">
    <div class="group">
      <label class="group__label">firstname</label
      ><input v-model="firstname" type="text" name="firstname" />
    </div>
    <div class="group">
      <label class="group__label">lastname</label
      ><input v-model="lastname" type="text" name="lastname" />
    </div>
    <div class="group">
      <label class="group__label">address1</label
      ><input v-model="address1" type="text" name="address1" />
    </div>
    <div class="group">
      <label class="group__label">address2</label
      ><input v-model="address2" type="text" name="address2" />
    </div>
    <div class="group">
      <label class="group__label">city</label
      ><input v-model="city" type="text" name="city" />
    </div>
    <div class="group">
      <label class="group__label">state</label
      ><input v-model="state" type="text" name="state" />
    </div>
    <div class="group">
      <label class="group__label">postcode</label
      ><input v-model="postcode" type="text" name="postcode" />
    </div>
    <div class="group">
      <label class="group__label">country</label
      ><input v-model="country" type="text" name="country" />
    </div>
    <div class="group">
      <label class="group__label">email</label
      ><input v-model="email" type="email" name="email" />
    </div>
    <div class="group">
      <label class="group__label">phone</label
      ><input v-model="phone" type="number" name="phone" />
    </div>
    <div class="group">
      <button class="btn btn--red" @click.prevent="submitOrder()">
        Confirm Order
      </button>
    </div>
  </form>
</template>
<script>
import { mapGetters } from 'vuex'
// import { createOrder } from '@/helpers/clientApi'
export default {
  name: 'CheckoutForm',
  data() {
    return {
      firstname: '',
      lastname: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postcode: '',
      country: 'US',
      email: 'odeloic@gmail.com',
      phone: '+250788516460'
    }
  },
  computed: {
    ...mapGetters(['cartProducts', 'cartTotal'])
  },
  methods: {
    submitOrder() {
      // const params = {
      //   shipping: {
      //     first_name: this.firstname,
      //     last_name: this.lastname,
      //     address_1: this.address1,
      //     address_2: this.address2,
      //     city: this.city,
      //     state: this.state,
      //     postcode: this.postcode,
      //     country: this.country,
      //     email: this.email,
      //     phone: this.phone
      //   },
      //   line_items: this.cartProducts
      // }
      // createOrder(params)
      const publickKey = 'FLWPUBK-9e1e8a884d1260d84c60931086f7191a-X'
      window.getpaidSetup({
        customer_email: this.email,
        amount: parseFloat(this.cartTotal),
        txref: '008744323234aa',
        PBFPubKey: publickKey,
        onclose: () => console.log('payment closed'),
        callback: (response) => console.log(response),
        meta: this.metadata,
        currency: 'USD',
        country: 'NG',
        customer_firstname: this.firstname,
        customer_lastname: this.lastname,
        custom_title: 'Thanks For shopping with us'
        // custom_logo: this.customLogo,
        // redirect_url: this.redirectUrl,
        // payment_plan: this.paymentPlan,
        // payment_options: this.paymentOptions,
        // subaccounts: this.subaccounts,
        // hosted_payment: this.hostedPayment
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 1.8rem;
    }

    &__label {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1rem;
      margin-bottom: 0.6rem;
      letter-spacing: 0.6px;
      font-weight: 700;
      text-transform: capitalize;
    }

    input {
      width: 100%;
      border: 1.5px solid #000;
      padding: 0.5rem 1.3rem;
    }
  }
}
</style>
