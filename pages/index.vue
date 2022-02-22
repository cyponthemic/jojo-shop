<template>
  <div v-if="$store.state.product">
    <h1 v-for="product in $store.state.product.items" :key="product.id">
      Name: {{ product.name }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async fetch() {
    try {
      await this.$store.dispatch('product/fetch')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('404', e)
    }
  },
}
</script>
