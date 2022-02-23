<template>
  <div>
    <ProductList />

    <div>
      Cart:
      <ul>
        <li v-for="item in $store.state.cart.items" :key="item.id">
          {{ item.name }} / {{ item.quantity }}
        </li>
      </ul>

      <button
        type="submit"
        elevation="2"
        @click="$store.dispatch('cart/checkout')"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    products() {
      return this.$store.getters['product/items']
    },
  },
  mounted() {
    this.$store.dispatch('product/fetch')
    this.$store.dispatch('prices/fetch')
  },
}
</script>
