<template>
  <ProductOverview v-if="product && product.id" :product="product" />
</template>
<script>
export default {
  name: 'ProductPage',
  asyncData({ params }) {
    return {
      params,
    }
  },
  computed: {
    products() {
      return this.$store.getters['product/items']
    },
    product() {
      return this.products.find(
        (product) => product?.metadata.handle === this.params.handle
      )
    },
  },
  mounted() {
    this.$store.dispatch('product/fetch')
    this.$store.dispatch('prices/fetch')
  },
}
</script>
