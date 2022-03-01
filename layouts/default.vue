<template>
  <div>
    <client-only>
      <jojo-background />
    </client-only>
    <HeaderNavigation
      :class="$store.state.jojoBackground.complete ? 'opacity-1' : 'opacity-0'"
    />
    <div
      class="max-w-sm mx-auto flex items-start justify-center py-6 transition-all"
      :class="[$store.state.jojoBackground.complete ? 'opacity-1' : 'opacity-0', {'h-screen' : home}]"
    >
      <img class="w-full h-auto" v-if="home" src="/JOJOLOGO.svg" alt="" />
      <img class="w-full h-auto" v-else src="/JOJOLOGO_SM.svg" alt="" />
    </div>

    <ShoppingCart v-show="$store.state.cart.open" />
    <div
      :class="$store.state.jojoBackground.complete ? 'opacity-1' : 'opacity-0'"
    >
      <nuxt></nuxt>
      <div class="max-w-xl mx-auto pt-24 pb-12">
        <img class="w-full" src="/JOJOFOOTER.svg" alt="" />
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
