<template>
  <a
    class="link white--text font-weight-bold"
    style="line-height: 1.7 !important;"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>

<script>
  export default {
    name: 'BaseLink',
  }
</script>

<style lang="sass">
.link
  text-decoration: none
  padding-bottom: 6px
  box-shadow: inset 0 -2px 0 0 hsl(0deg 0% 100% / 20%)
  transition: box-shadow 300ms ease, color 300ms ease
  &:hover
    box-shadow: inset 0 -2px 0 0 #fff
</style>
