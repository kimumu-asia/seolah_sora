<template>
  <div>
    <about-me />
  </div>
</template>

<script>
  export default {
    name: 'AboutView',

    components: {
      AboutMe: () => import('@/components/AboutMe'),
    },
  }
</script>
