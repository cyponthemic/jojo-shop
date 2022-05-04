import Vue from "vue"

export const state = () => ({
    cacheVersion: '',
    settings: {}
  })
  
  export const mutations = {
    setSettings(state, settings) {
      Vue.set(state, 'settings', {
        ...state.settings,
        ...settings
      })
    },
    setCacheVersion(state, version) {
      state.cacheVersion = version
    }
  }
  
  export const getters = {
    settings(state) {
      return state.settings || {}
    }
  }
  
  export const actions = {
    loadSettings({ commit }, context) {
      return this.$storyapi
        .get(`cdn/stories/settings`, {
          version: context.version
        })
        .then((res) => {
          commit('setSettings', res.data.story.content)
        })
    }
  }
  
  export default {
    actions,
    mutations,
    getters,
    state
  }
  