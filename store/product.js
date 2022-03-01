import { forEach, values } from 'lodash'
import Vue from 'vue'

const Product = (product) => ({
  ...product,
  link: '/products/' + product.metadata.handle,
})
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
    return values(state.items).map((product) => Product(product))
  },
}

export const mutations = {
  STORE_PRODUCT(state, products) {
    forEach(products, (p) => {
      Vue.set(state.items, p.id, p)
    })
  },
}
