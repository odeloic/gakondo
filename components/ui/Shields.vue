<template>
  <div class="shields" :style="`background-image: url(${bgUrl})`"></div>
</template>
<script>
export default {
  name: 'Shields',
  props: {
    color: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    bgUrl() {
      return this.color === 'dark'
        ? '/images/shield-black-horizontal.svg'
        : '/images/shield-white-horizontal.svg'
    }
  }
}
</script>
<style lang="scss" scoped>
.shields {
  background-size: contain;
  background-repeat: repeat-x;
  width: 100%;
  height: 3rem;
}
</style>
