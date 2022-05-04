<template>
  <div></div>
</template>
<script>
import Vue from "vue"
export default {
  data() {
    return {
      feed: {},
    }
  },
  created() {
    this.getInsta()
  },
  methods: {
    getInsta() {
      this.$axios.get(`/.netlify/functions/instagram`).then((response) => {
        Vue.set(this, 'feed', response.data.user)
      })
    },
  },
}
</script>
