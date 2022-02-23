<template>
  <form class="group relative" @submit.prevent="add">
    <div
      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
    >
      <img
        :src="product.images[0]"
        :alt="product.description"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="mt-4 flex justify-between relative">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ product.name }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">
        {{ price && price.unit_amount | price }}
      </p>
    </div>
    <div class="flex">
      <!-- <FormsSelect v-model="quantity"  :items="[1, 2, 3, 4, 5]" label="Quantity"></FormsSelect> -->
      <button
        type="submit"
        class="w-full text-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="add"
      >
        Button text
      </button>
    </div>
  </form>
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
