<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <router-link
        to="/"
        class="logo"
      >
        <v-img
          v-if="showLogo"
          :src="require('@/assets/logo.png')"
          class="shrink"
          cover
          width="120"
        />
      </router-link>
    </v-slide-x-transition>

    <v-spacer />

    <v-btn
      elevation="0"
      class="ml-3 transparent"
      exact-active-class="menu--active"
      tile
      to="/"
    >
      Home
    </v-btn>
    <v-btn
      elevation="0"
      class="ml-3 transparent"
      exact-active-class="menu--active"
      tile
      to="/about"
    >
      About
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
    },
  }
</script>

<style lang="sass" scoped>
.menu--active
  box-shadow: inset 0 -2px 0 0 #1d62ff !important
  &::before
    opacity: 0 !important
</style>
