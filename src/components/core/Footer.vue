<template>
  <v-footer
    height="260"
    class="justify-center d-block"
  >
    <div>
      <v-img
        :src="require('@/assets/logo.png')"
        class="shrink"
        style="max-width: 160px;"
        contain
      />
    </div>
    <div class="ml-2">
      <social-media />
    </div>
    <p class="copyright">© 2021 seolahkim. All rights reserved.</p>
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

<style lang="sass">
.copyright
  color: #b8b8b8
  font-weight: 800
  font-size: 14px
  margin: 14px 24px
</style>
