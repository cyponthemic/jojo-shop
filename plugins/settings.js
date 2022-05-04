import Vue from 'vue'

import { mapGetters } from 'vuex'

const Settings = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          settings: 'storyblok/settings'
        })
      }
    })
  }
}

Vue.use(Settings)
