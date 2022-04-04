<template>
  <div class="flex justify-center">
    <img
      src="/bottle.png"
      alt=""
      style="z-index: 1"
      class="w-1/2 lg:w-64 h-auto mx-auto relative"
    />
    <lottie
      class="absolute pointer-events-none left-0 top-0 w-full h-auto overflow-visible"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />
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
