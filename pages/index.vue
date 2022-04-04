<template>
  <client-only>
    <div>
      <JojoLogo />

      <picture>
        <img
          class="w-full my-16"
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_200.jpg   200w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_568.jpg   568w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_809.jpg   809w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_973.jpg   973w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1140.jpg 1140w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1271.jpg 1271w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1395.jpg 1395w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1399.jpg 1399w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1400.jpg 1400w
          "
          src="/banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1400.jpg"
          alt=""
        />
      </picture>

      <div id="sauce">
        <ProductOverview
          v-if="product"
          :product="product"
          :breadcrumbs="false"
        />
      </div>
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
    product() {
      return this.products.find(
        (product) => product?.metadata.handle === 'tomato-sauce'
      )
    },
  },
  mounted() {
    this.$store.dispatch('product/fetch')
    this.$store.dispatch('prices/fetch')
  },
}
</script>
