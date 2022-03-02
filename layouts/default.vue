<template>
  <div>
    <client-only>
      <jojo-background />
    </client-only>
    <StoreHeader />

    <div
      v-if="home"
      class="max-w-sm mx-auto flex items-start justify-center py-12 lg:py-6 transition-all"
      :class="[
        $store.state.jojoBackground.complete ? 'opacity-1' : 'opacity-0',
        { 'lg:h-screen': home },
      ]"
    >
      <img class="w-1/2 lg:w-full h-auto" src="/JOJOLOGO.svg" alt="" />
    </div>

    <ShoppingCart v-show="$store.state.cart.open" />
    <div
      :class="$store.state.jojoBackground.complete ? 'opacity-1' : 'opacity-0'"
    >
      <nuxt></nuxt>
      <div class="max-w-xl mx-auto pt-24 pb-12 px-6">
        <img class="w-full" src="/JOJOFOOTER_Light.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import JojoBackground from '~/components/JojoBackground.vue'
export default {
  components: { JojoBackground },
  computed: {
    home() {
      return this.$route.fullPath === '/'
    },
  },
}
</script>
