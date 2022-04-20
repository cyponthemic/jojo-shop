<template>
  <div class="root">
    <img
      ref="background"
      class="background"
      src="/banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1400.jpg"
    />
    <img
      ref="foreground"
      class="foreground"
      src="/banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1400.jpg"
    />
    <div ref="first" class="section section-1">
      <div>
        <h1>Parallax Made Easy.</h1>
      </div>
    </div>
    <div ref="second" class="section section-2">
      <div>
        <h2>Here's more info</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(evt) {
      const scrollY = window.scrollY
      // decreases as user scrolls
      this.$refs.first.value.style.opacity =
        (100 -
          (scrollY +
            window.innerHeight -
            this.$refs.first.value.offsetHeight)) /
        100
      // increases as user scrolls
      this.$refs.second.value.style.opacity =
        (scrollY + window.innerHeight - this.$refs.second.value.offsetTop) / 100

      const maxBackgroundSize = 120
      const backgroundSize = scrollY / (maxBackgroundSize - 100) // increases as user scrolls

      // zoom the background at a slower rate
      this.$refs.background.value.style.transform =
        'scale(' + (100 + backgroundSize * 0.4) / 100 + ')'
      this.$refs.foreground.value.style.transform =
        'scale(' + (100 + backgroundSize) / 100 + ')'
    },
  },
}
</script>
<style scoped>
img.background,
img.foreground {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Scale proportionately */
  width: 100%;
  height: auto;
}

img.background {
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
}
</style>
