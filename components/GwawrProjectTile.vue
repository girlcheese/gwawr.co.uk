<template>
  <nuxt-link
    v-if="title !== null"
    :to="url"
    :title="title"
    class="fl w-50 w-25-l link overflow-hidden">
    <div :aria-label="title"
         :style="`background:url(${image}) no-repeat center center; background-size: cover;`"
         role="img"
         class="grow aspect-ratio--1x1 z-1"/>
    <div class="subtitle">{{ title }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/500.png/09f/fff"
    },
    url: {
      type: String,
      default: "#"
    }
  }
}
</script>

<style scoped>
.subtitle {
  display: none;
}
</style>
