<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      :small="!large"
      class="ml-3 transparent"
      elevation="0"
      :href="item.link"
    >
      {{ item.name }}
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: true,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'About',
          link: '/about',
        },
      ],
    }),
  }
</script>
