<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Customers also purchased
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <ProductTile
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="group relative"
        >
        </ProductTile>

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['product/items']
    },
  },
}
</script>
