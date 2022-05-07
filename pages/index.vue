<template>
  <div>
    <JojoLogo />
    <!-- <parralax-wrapper/> -->
    <div class="container xl:pt-32 xl:px-32 mx-auto">
      <picture>
        <img
          class="w-full my-16"
          data-aos="fade-up"
          data-aos-offset="200"
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
    </div>
    <div class="relative pb-32 xl:pb-64 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto text-center">
          <h1>
            <span
              class="block text-base text-center text-indigo-500 font-semibold tracking-wide uppercase"
              >JOJO</span
            >
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              About us
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            A family tradition now ready to share with the world. Small batch
            and handmade in Melbourne. <br />
            No preservatives, no additives, no nasties. Only good things inside.
            A sauce for the whole community to be shared and loved time & time
            again.
          </p>
        </div>
      </div>
    </div>
    <div id="sauce">
      <ProductOverview
        v-if="product"
        :product="product"
        :show-other-images="false"
        :breadcrumbs="false"
      />
    </div>

    <ImageGrid v-if="false" />
  </div>
</template>

<script>
import ParralaxWrapper from '~/components/ParralaxWrapper.vue'
const PRODUCT = {
  id: 'prod_LPixOQzzMbk5RV',
  object: 'product',
  active: true,
  attributes: [],
  created: 1648615935,
  description:
    'Product Description:Tomato Sauce. Handmade in Melbourne.Whatâ€™s inside: Tomatoes (Aussie Grown), Garlic, Vinegar, Salt, Sugar & SpiceItâ€™s sauce like youâ€™ve never sauced before.  ketchup & chutney collidedEnjoy JOJO on everything. Vegan.',
  images: [
    'https://files.stripe.com/links/MDB8YWNjdF8xS1Z2dVpBSU41ZmJib3pnfGZsX2xpdmVfQ25SSVNZRUZWT2VJYkR1M21lRzk0VGNl00RRYxAFQj',
  ],
  livemode: true,
  metadata: {
    category: 'sauce',
    title: 'Tomato Sauce',
    size: 'Size',
    handle: 'tomato-sauce',
    description: 'Tomato Sauce. Handmade in Melbourne.',
    details:
      'Tomatoes (Aussie Grown), Garlic, Vinegar, Salt, Sugar & SpiceItâ€™s sauce like youâ€™ve never sauced before. ketchup & chutney collidedEnjoy JOJO on everything. Vegan.',
  },
  name: 'Tomato Sauce',
  package_dimensions: null,
  shippable: null,
  statement_descriptor: null,
  tax_code: 'txcd_20030000',
  type: 'service',
  unit_label: null,
  updated: 1649066338,
  url: null,
}
export default {
  name: 'IndexPage',
  components: { ParralaxWrapper },
  async asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    const endpoint = `cdn/stories/home`

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
      data
    }
  },
  computed: {
    products() {
      return this.$store.getters['product/items']
    },
    product() {
      return (
        this.products.find(
          (product) => product?.metadata.handle === 'tomato-sauce'
        ) || PRODUCT
      )
    },
  },
  mounted() {
    this.$store.dispatch('product/fetch')
    this.$store.dispatch('prices/fetch')
  },
}
</script>
