<template>
    <div>
        <component
            :is="item.component"
            v-for="item in modules"
            :key="item._uid"
            :blok="item"
        ></component>
    </div>
</template>
<script>
  export default {
    props: {
      modules: {
        required: true,
        type: Array
      }
    }
  }
</script>
