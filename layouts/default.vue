<template>
  <div>
    <ShoppingCart v-show="$store.state.cart.open" />
    <nuxt></nuxt>
  </div>
</template>
