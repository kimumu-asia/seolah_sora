<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <a
        href="/"
        class="logo"
      >
        <v-img
          v-if="showLogo"
          :src="require('@/assets/logo.png')"
          class="shrink"
          cover
          width="120"
        />
      </a>
    </v-slide-x-transition>

    <v-spacer />

    <v-btn
      elevation="0"
      class="ml-3 transparent"
      href="/"
    >
      Home
    </v-btn>
    <v-btn
      elevation="0"
      class="ml-3 transparent"
      href="/about"
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
