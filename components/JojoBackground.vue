<template>
  <lottie
    class="fixed pointer-events-none left-0 top-0 w-full h-full"
    style="z-index: -1"
    :width="width()"
    :height="height()"
    :options="lottieOptions"
    @animCreated="handleAnimation"
  />
</template>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/static/lf30_editor_bdku0sp1.json'
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
        loop: false,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
        },
      },
    }
  },
  methods: {
    width() {
      return window.innerWidth
    },
    height() {
      return window.innerHeight
    },
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
