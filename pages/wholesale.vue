<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'WhholesalePage',
  async asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    const endpoint = `cdn/stories/wholesale`

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
  mounted() {
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
  }
}
</script>

<template>
  <div>
    <StoryblokContentBuilder
      :modules="data.story.content.body"
    ></StoryblokContentBuilder>
    <WholesaleForm />
  </div>
</template>
