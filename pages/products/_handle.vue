<template>
  <ProductOverview v-if="product && product.id" :product="{...product, ...data.story.content}" />
</template>
<script>
export default {
  name: 'ProductPage',
   async asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    const endpoint = `cdn/stories/products/${context.params.handle}`

    const data = await context.app.$storyapi
      .get(endpoint, {
        version,        
        cv: context.store.state.cacheVersion
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })

    return {
      params: context.params,
      data
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
