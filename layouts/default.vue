<template>
  <main>
    <div data-scroll>
      <client-only>
        <jojo-background />
      </client-only>
      <StoreHeader />
      <ShoppingCart v-show="$store.state.cart.open" />
      <div
        :class="
          $store.state.jojoBackground.complete ? 'opacity-1' : 'opacity-0'
        "
      >
        <nuxt></nuxt>
        <div class="max-w-xs mx-auto pt-24 px-6">
          <img class="w-full" src="/JOJOFOOTER_UltraLight.svg" alt="" />
        </div>

        <StoreFooter />
      </div>
    </div>
    <div id="container"></div>
  </main>
</template>
<script>
// import Sketch from '../assets/js/app'
import JojoBackground from '~/components/JojoBackground.vue'
import StoreHeader from '~/components/StoreHeader.vue'
import StoreFooter from '~/components/StoreFooter.vue'
export default {
  components: { JojoBackground, StoreHeader, StoreFooter },
  computed: {
    home() {
      return this.$route.fullPath === '/'
    },
  },
  mounted() {
    // setTimeout(() => {
    //   // eslint-disable-next-line no-new
    //   new Sketch({
    //     dom: document.getElementById('container'),
    //     callback: () => this.$store.dispatch('loading/toggle'),
    //   })
    // }, 3000)
  },
}
</script>
<style scoped>
#container {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
