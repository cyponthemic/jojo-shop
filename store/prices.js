import { forEach, values } from 'lodash'
import Vue from 'vue'

export const state = () => ({
  items: {},
})

export const actions = {
  fetch({ commit }) {
    return this.$axios.get('/.netlify/functions/prices').then(({ data }) => {
      commit('STORE_PRICE', data)
    })
  },
}

export const getters = {
  items(state) {
    return values(state.items)
  },
}

export const mutations = {
  STORE_PRICE(state, products) {
    forEach(products, (p) => {
      Vue.set(state.items, p.id, p)
    })
  },
}
