<template>
  <nuxt-link
    v-if="title !== null"
    :style="`background:url(${image}) no-repeat center center; background-size: cover;`"
    :to="url"
    :title="title"
    class="column is-half-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd is-pulled-left">
    <div :aria-label="title"

         role="img"
         class="is-1x1"/>
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

.is-1x1 {
  padding-bottom: 100%;
}
</style>
