<template>
  <div>
    <JojoLogo />

    <ImageGrid v-if="false" />

    <StoryblokContentBuilder :modules="data.story.content.body"/>
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
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content)
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
}
</script>
