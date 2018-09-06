<template>
  <nuxt-link v-if="title !== null" :to="url" class="db aspect-ratio aspect-ratio--1x1 dim">
    <span :aria-label="title"
          :style="`background-image:url(${image});`"
          role="img"
          class="bg-center cover aspect-ratio--object">
      {{ title }}
    </span>
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
</style>
