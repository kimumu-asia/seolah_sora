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
