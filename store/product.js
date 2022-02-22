import { forEach } from 'lodash'

export const state = () => ({
  products: {},
})

export const actions = {
  fetch({ commit }) {
    return this.$axios.get('/.netlify/functions/products').then(({ data }) => {
      commit('STORE_PRODUCT', data)
    })
  },
}

export const mutations = {
  STORE_PRODUCT(state, products) {
    forEach(products, (p) => {
      state.products[p.id] = p
    })
  },
}
