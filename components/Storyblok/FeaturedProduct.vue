<script>
/* eslint-disable vue/no-v-html */
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    products() {
      return this.$store.getters['product/items']
    },
    product() {
      return (
        this.products.find(
          (product) => product?.metadata.handle === 'tomato-sauce'
        )
      )
    },
  },
}
</script>
<template>
   <div v-if="product" id="sauce">
      <ProductOverview
        :product="product"
        :show-other-images="false"
        :breadcrumbs="false"
      />
    </div>
</template>
