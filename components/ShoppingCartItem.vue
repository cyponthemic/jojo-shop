<template>
  <li class="flex py-6">
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img
        :src="product.images[0]"
        :alt="product.description"
        class="h-full w-full object-cover object-center"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#"> {{ product.name }} / {{ product.price.nickname }} </a>
          </h3>
          <p class="ml-4">
            {{ (product.price.unit_amount * product.quantity) | price }}
          </p>
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">
          Qty {{ product.quantity }} x {{ product.price.unit_amount | price }}
        </p>

        <div class="flex">
          <button
            type="button"
            class="font-medium text-indigo-500 hover:text-indigo-600"
            @click.stop="$store.commit('cart/remove', product)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>
