<template>
  <v-footer
    class="justify-center d-block l-footer grey"
  >
    <div class="d-inline-block mb-8">
      <router-link
        to="/"
        class="logo"
      >
        <v-img
          :src="require('@/assets/logo.png')"
          cover
          class="shrink"
          width="146"
        />
      </router-link>
    </div>
    <div>
      <social-media />
    </div>
    <div class="copyright mt-10 roboto">© 2021 seolah kim. All rights reserved.</div>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },
  }
</script>

<style lang="sass" scoped>
.l-footer
  padding: 60px
.copyright
  font-size: 14px
  color: #b8b8b8
  font-weight: 800
</style>
