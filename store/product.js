import { forEach } from 'lodash'

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

export const mutations = {
  STORE_PRODUCT(state, products) {
    forEach(products, (p) => {
      state.items[p.id] = p
    })
  },
}
