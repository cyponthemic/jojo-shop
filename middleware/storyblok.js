export default async function({ app, isServer, route, store, isDev }) {
    const version = route.query._storyblok || isDev ? 'draft' : 'published'
  
    if (isServer) {
      store.commit('storyblok/setCacheVersion', app.$storyapi.cacheVersion)
    }
  
    if (!store.state.storyblok.settings._uid) {
      await store.dispatch('storyblok/loadSettings', { version })
    }
  }
  