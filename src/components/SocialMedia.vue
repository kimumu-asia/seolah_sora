<template>
  <div>
    <div
        v-for="(item, i) in items.slice(0, large ? items.length : 3)"
        :key="i"
        class="mb-2"
    >
        <a
        :href="item.link"
        target="_blank"
        class="roboto font-weight-bold"
        color="text--black body-2"
        >
            {{ item.name }}
        </a>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      large: false,
      items: [
        {
          name: 'Medium',
          link: 'https://medium.com/@seolahkim.asia',
        },
        {
          name: 'Github',
          link: 'https://github.com/kimumu-asia?tab=repositories',
        },
      ],
    }),
  }
</script>
