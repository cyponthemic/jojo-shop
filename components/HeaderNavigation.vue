<template>
  <ul class="flex justify-center space-x-4 text-lg py-6">
    <li v-for="link in links" :key="link.uri + link.name">
      <nuxt-link :to="link.uri">{{ link.name }}</nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Home',
          uri: '/',
        },
        {
          name: 'Sauce',
          uri: '/products/category/sauce',
        },
        {
          name: 'Merch',
          uri: '/products/category/merch',
        },
        {
          name: 'Wholesale',
          uri: '/wholesale',
        },
      ],
    }
  },
}
</script>
