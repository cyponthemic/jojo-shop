<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <div v-else>
      <h1 v-for="product in $store.state.products" :key="product.id">
        Name: {{ product.name }}
      </h1>
    </div>
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
