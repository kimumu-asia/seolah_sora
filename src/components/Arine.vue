<template>
  <section
    id="recent-project"
    class="overflow-hidden l-project"
  >
    <v-row
      no-gutters
      class="project"
    >
      <div
        :style="{ background: 'url(' + require(`@/assets/arine-main.png`) + ') no-repeat center center' }"
        class="d-inline-block project--bg"
        height="100%"
      />
      <div
        class="info lighten-1 white--text project--explain"
      >
        <base-heading>
          <span class="display-number">03</span>
        </base-heading>
        <base-heading>
          ARINE
        </base-heading>

        <base-text class="mb-5">
          20-30代の女性をターゲットにした化粧品・ファッションメディアサービスのリニューアルプロジェクト
        </base-text>

        <base-link
          href="https://naver.com"
          target="_blank"
        >
          view project
        </base-link>
      </div>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Arine',
  }
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/settings/_variables.scss'

.l-project
  position: relative
.project
  display: inline-block
  width: 100%
  height: 580px
.project--explain
  position: absolute
  z-index: 1
  width: 52%
  height: 100%
  opacity: .9
  padding: 80px
.project--bg
  width: 100%
  height: 100%
  background-size: 100% 100% !important
  position: absolute
  z-index: 1

@media #{map-get($display-breakpoints, 'sm-and-down')}
.project--explain
  width: 100%
  padding: 80px 24px
  opacity: .95
</style>
