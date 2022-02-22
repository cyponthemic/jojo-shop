<template>
  <div>
    <div v-if="products.length">
      <ProductTile v-for="product in products" :key="product.id">
        Name: {{ product.name }}
      </ProductTile>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    ProductTile: () => import('@/components/ProductTile.vue'),
  },
  async fetch() {
    try {
      await this.$store.dispatch('product/fetch')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('404', e)
    }
  },
  computed: {
    products() {
      return this.$store.getters['product/items']
    },
  },
}
</script>
