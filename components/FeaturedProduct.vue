<template>
  <div class="container mx-auto px-3 flex">
    <div
      class="w-full lg:w-1/2 relative lg:h-screen flex justify-center items-center overflow-visible"
    >
      <img src="/bottle.png" alt="" class="w-1/2 lg:w-64 h-auto" />
      <lottie
        class="absolute pointer-events-none left-0 top-0 w-full h-auto overflow-visible"
        style="z-index: -1"
        :options="lottieOptions"
        @animCreated="handleAnimation"
      />
    </div>
    <div class="w-1/2"></div>
  </div>
</template>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/static/78770-test-book.json'
export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: {
        animationData: animationData.default,
        preserveAspectRatio: false,
        loop: true,
      },
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim

      this.anim.setSpeed(0.75)

      setTimeout(this.animationCompleted, 1000)
    },
    animationCompleted() {
      this.$store.commit('jojoBackground/complete')
    },
  },
}
</script>
