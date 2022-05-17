<script>
/* eslint-disable vue/no-v-html */
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    richtext() {
      return this.blok.body ? this.$storyapi.richTextResolver.render(this.blok.body) : ''
    },
  },
}
</script>
<template>
  <div v-editable="blok">
    <div
      v-if="blok.Image && blok.Image.filename"
      class="container xl:pt-32 xl:px-32 mx-auto"
    >
      <picture>
        <img
          class="w-full my-16"
          data-aos="fade-up"
          data-aos-offset="200"
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_200.jpg   200w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_568.jpg   568w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_809.jpg   809w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_973.jpg   973w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1140.jpg 1140w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1271.jpg 1271w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1395.jpg 1395w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1399.jpg 1399w,
            /banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1400.jpg 1400w
          "
          src="/banner_for_front_page_vou5ko/banner_for_front_page_vou5ko_c_scale-w_1400.jpg"
          alt=""
        />
      </picture>
    </div>
    <div v-if=" blok.preHeading || blok.heading || blok.body" :class="[{'pt-16 xl:pt-32' : !(blok.Image && blok.Image.filename)}, blok.bottomPadding ? 'pb-32 xl:pb-64' : 'pb-16 xl:pb-24']" class="relative overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto text-center">
          <h1>
            <span
              class="block text-base text-center text-indigo-500 font-semibold tracking-wide uppercase"
              >{{ blok.preHeading }}</span
            >
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              {{ blok.heading }}
            </span>
          </h1>
          <div class="mt-8 text-xl text-gray-500 leading-8" v-html="richtext">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

