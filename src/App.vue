<template>
  <v-app>
    <core-app-bar />

    <router-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
    },
  }
</script>

<style lang="sass">
@import 'https://fonts.googleapis.com/css2?family=Newsreader&family=Noto+Sans+JP:wght@100&display=swap'

html, body
  font-family: 'Noto Sans JP', 'Newsreader', serif

#app
  font-family: 'Noto Sans JP', 'Newsreader', serif

.newsreader
  font-family: 'Newsreader', serif
</style>
