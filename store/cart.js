import Vue from 'vue'
import { values, sumBy } from 'lodash'

const ProductToLineItem = (product) => ({
  price_data: {
    currency: product.price.currency,
    product_data: {
      name: product.name,
      description: product.description,
      images: product.images,
    },
    unit_amount: product.price.unit_amount,
  },
  quantity: product.quantity,
})
export default {
  state: () => {
    return {
      items: {},
      open: false,
    }
  },
  getters: {
    items(state) {
      return values(state.items)
    },
    total(state) {
      return (
        sumBy(values(state.items), function (item) {
          return item.price.unit_amount * item.quantity
        }) || 0
      )
    },
  },
  mutations: {
    close(state) {
      state.open = false
    },
    open(state) {
      state.open = true
    },
    toggle(state) {
      state.open = !state.open
    },
    remove(state, payload) {
      Vue.delete(state.items, payload.id)
    },
    add(state, payload) {
      if (state.items[payload.price.id]) {
        state.items[payload.price.id].quantity += payload.quantity
      } else {
        Vue.set(state.items, payload.price.id, payload)
      }
    },
  },
  actions: {
    checkout({ state, rootState }) {
      this.$axios
        .post('/.netlify/functions/checkout', {
          items: values(state.items).map(ProductToLineItem),
          config: {
            success_url: window.location.domain + '/success',
            cancel_url: window.location.href,
          },
        })
        .then(({ data }) => {
          window.location.href = data
        })
    },
  },
}
