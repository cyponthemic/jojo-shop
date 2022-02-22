import { forEach, values } from 'lodash'
import Vue from 'vue'

export const state = () => ({
  items: {},
})

export const actions = {
  fetch({ commit }) {
    return this.$axios.get('/.netlify/functions/products').then(({ data }) => {
      commit('STORE_PRODUCT', data)
    })
  },
}

export const getters = {
  items(state) {
    return values(state.items)
  },
}

export const mutations = {
  STORE_PRODUCT(state, products) {
    forEach(products, (p) => {
      Vue.set(state.items, p.id, p)
    })
  },
}
