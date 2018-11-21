<template>
  <div v-if="title !== null" :data-idx="idx" class="card">
    <div class="card-image">
      <nuxt-link :to="url" :title="title">
        <figure class="image is-4by3"><img :src="image" :alt="title" /></figure>
      </nuxt-link>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title">
          <nuxt-link :to="url" :title="title">{{ title }}</nuxt-link>
        </p>
      </div>
    </div>
  </div>
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
    },
    idx: {
      type: Number,
      default: null
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
