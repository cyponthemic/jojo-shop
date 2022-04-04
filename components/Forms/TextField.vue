<template>
  <div class="relative rounded-md shadow-sm w-auto">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <span class="text-gray-500 sm:text-sm"> Qty. </span>
    </div>
    <input
      id="price"
      v-bind="{ ...$props, ...$attrs }"
      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-2 py-4 sm:text-sm border-gray-300 rounded-md"
      value="1"
      @input="(e) => $emit('input', Number(e.target.value))"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>
