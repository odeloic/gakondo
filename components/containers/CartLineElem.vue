<template>
  <div class="cart-line-elem">
    <h4 class="title">{{ data.name }}</h4>
    <span class="quantity">{{ data.quantity }}</span>
    <span class="price">${{ data.price * data.quantity }}</span>
  </div>
</template>
<script>
export default {
  name: 'CartLineElem',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-line-elem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  .title {
    flex-basis: 50%;
    font-size: 1.1rem;
    line-height: 1.8;
    font-weight: 400;
  }

  .quantity {
    flex-basis: 25%;
    font-size: 1rem;
    font-weight: 700;
  }

  .price {
    flex: 1;
    font-size: 1rem;
    font-weight: 700;
    text-align: right;
  }
}
</style>
