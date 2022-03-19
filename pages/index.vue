<template>
  <client-only>
    <div>
      <ImageGrid />
      <FeaturedProduct />
    </div>
  </client-only>
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
