<template>
  <div>
    <welcome />
    <hobonichi />
    <ymobile />
    <arine />
    <minkabu />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      Arine: () => import('@/components/Arine'),
      Minkabu: () => import('@/components/Minkabu'),
      Hobonichi: () => import('@/components/Hobonichi'),
      Ymobile: () => import('@/components/Ymobile'),
      Welcome: () => import('@/components/Welcome'),
    },
  }
</script>

<style lang="sass">
@import '~vuetify/src/styles/settings/_variables.scss'
</style>
