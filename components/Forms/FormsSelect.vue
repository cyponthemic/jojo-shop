<template>
  <div>
    <label for="location" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <select
      id="location"
      name="location"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option v-for="(item, index) in items" :key="index + item">
        {{ item }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
