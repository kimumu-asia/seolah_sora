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
        :style="{ background: 'url(' + require(`@/assets/hobonichi-main.png`) + ') no-repeat center center' }"
        class="d-inline-block project--bg"
        height="100%"
      />
      <div
        class="info lighten-1 white--text project--explain"
      >
        <base-heading>
          <span class="newsreader">01</span>
        </base-heading>
        <base-heading class="text-h4 font-weight-bold">
          ほぼ日の学校
        </base-heading>

        <base-text class="mb-5">
          講義ストリーミングサービスのLP制作およびCMSの開発
        </base-text>
      </div>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Hobonichi',
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
  transition: all 200ms ease, color 200ms ease
.project--bg
  width: 100%
  height: 100%
  background-size: cover !important
  position: absolute
  z-index: 1

@media #{map-get($display-breakpoints, 'sm-and-down')}
  .project--explain
    width: 100%
    padding: 80px 24px
    opacity: .95
</style>
