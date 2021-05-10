<template>
  <section
    v-if="message !== ''"
    :style="`background-image:url(${bgImage})`"
    class="w-full bg-no-repeat bg-center bg-cover h-4/5 bg-green-500"
  >
    <div class="container mx-auto h-auto text-white py-24 px-10 object-fill">
      <div class="container">
        <h1 class="title text-3xl font-extrabold tracking-wide">
          {{ message }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Hello Human',
    },
    bgImage: {
      type: String,
      default:
        'https://instagram.flhr4-1.fna.fbcdn.net/vp/5848a40c5dc6d10f3640bc03722cbd62/5C1F216C/t51.2885-15/e35/35617071_193034048022961_6300091736123244544_n.jpg',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
.hero {
  background-size: cover;
  background-position: 50% 50%;

  h1 {
    background-color: rgba($black-ter, 0.4);
    display: inline;
  }
}
</style>
