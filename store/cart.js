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
    add(state, payload) {
      if (state.items[payload.id]) {
        state.items[payload.id].quantity += payload.quantity
      } else {
        Vue.set(state.items, payload.id, payload)
      }
    },
  },
  actions: {
    checkout({ state, rootState }) {
      this.$axios
        .post('/.netlify/functions/checkout', {
          items: values(state.items).map(ProductToLineItem),
        })
        .then(({ data }) => {
          window.location.href = data
        })
    },
  },
}
