<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      elevation="0"
      class="ma-2"
      color="transparent"
      :href="item.link"
      target="_blank"
      :small="!large"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Medium',
          icon: 'mdi-medium',
          link: 'https://medium.com/@seolahkim.asia',
        },
        {
          name: 'Github',
          icon: 'mdi-git',
          link: 'https://github.com/kimumu-asia?tab=repositories',
        },
      ],
    }),
  }
</script>
