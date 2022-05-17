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
}
</script>

<template>
  <div>
    <StoryblokContentBuilder :modules="data.story.content.body"></StoryblokContentBuilder>
    <WholesaleForm />
  </div>
</template>
