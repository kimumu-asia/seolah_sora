<template>
  <div>
    <about />
  </div>
</template>

<script>
  export default {
    name: 'CoreAbout',

    components: {
      about: () => import('@/components/AboutMe'),
    },
  }
</script>

<style lang="sass">
@import '~vuetify/src/styles/settings/_variables.scss'
</style>
