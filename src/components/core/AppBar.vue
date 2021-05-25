<template>
  <v-card
    :elevation="0"
    tile
  >
    <v-app-bar
      v-scroll="onScroll"
      :color="barColor"
      fixed
      flat
    >
      <v-slide-x-transition>
        <v-img
          v-if="showLogo"
          :src="require('@/assets/logo.png')"
          class="shrink"
          contain
          :height="$vuetify.breakpoint.mdAndUp ? 100 : 66"
        />
      </v-slide-x-transition>

      <v-spacer />
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <app-menu />
      </template>
      <template v-else>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
      class="drawer"
    >
      <v-list
        nav
        class="ma-0 pa-0 drawer--list"
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
            class="drawer--list-item"
          >
            <v-list-item-title
              class="body-1 font-weight-bold"
            >
              <router-link
                to="/"
                exact-active-class="drawer--link-active"
                class="grey--text drawer--link"
              >
                Home
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="drawer--list-item"
          >
            <v-list-item-title
              class="body-1 font-weight-bold"
            >
              <router-link
                to="/about"
                exact-active-class="drawer--link-active"
                class="grey--text drawer--link"
              >
                About
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      AppMenu: () => import('@/components/AppMenu'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    computed: {
      barColor () {
        if (this.$vuetify.breakpoint.smAndDown && this.isScrolling) { return 'white' } else if (this.$vuetify.breakpoint.mdAndUp && this.isScrolling) { return 'white' }
        return 'transparent'
      },
    },

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 140
        this.showLogo = offset > 200
      },
    },
  }
</script>
<style lang="sass">
.aaaaa
  background: rgba(0, 0, 0, .5)
.drawer
  .drawer--list
    .drawer--list-item
      border-radius: 0
      padding: 0
      &::before
        content: ''
        border-radius: 0
    .drawer--link
      display: inline-block
      width: 100%
      height: 100%
      text-decoration: none
      padding: 0 20px
      &.drawer--link-active
        border-left: 3px solid rgb(0 0 0 / 50%)
</style>
