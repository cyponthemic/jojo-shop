<template>
  <div class="group relative">
    <nuxt-link :to="product.link"
      class="block w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
    >
      <img
        :src="product.images[0]"
        :alt="product.description"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </nuxt-link>
    <div class="mt-4 flex justify-between relative">
      <div>
        <h3 class="text-sm text-gray-700">
          <nuxt-link :to="product.link" href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ product.name }}
          </nuxt-link>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">
        {{ price && price.unit_amount | price }}
      </p>
    </div>
    <div class="flex mt-3 justify-center">
      <!-- <FormsSelect v-model="quantity"  :items="[1, 2, 3, 4, 5]" label="Quantity"></FormsSelect> -->
      <nuxt-link
        :to="product.link"
        class="px-10 tracking-lg uppercase rounded-full inline-flex justify-center items-center px-4 py-2 border-2 border-indigo-500 text-sm font-medium shadow-sm text-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        View
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTile',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    quantity: 1,
  }),
  computed: {
    price() {
      return this.$store.getters['prices/items'].find(
        (price) => price.product === this.product.id
      )
    },
  },
  methods: {
    add() {
      this.$store.commit('cart/add', {
        ...this.product,
        quantity: this.quantity,
        price: this.price,
      })
      this.$store.commit('cart/open')
    },
  },
}
</script>
