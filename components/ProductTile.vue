<template>
  <form @submit.prevent="submit">
    <slot></slot>
    <button type="submit">Checkout</button>
  </form>
</template>
<script>
export default {
  name: 'ProductTile',
  methods: {
    submit() {
      this.$axios.post('/.netlify/functions/checkout.js').then(({ data }) => {
        console.log('data')
      })
    },
  },
}
</script>
