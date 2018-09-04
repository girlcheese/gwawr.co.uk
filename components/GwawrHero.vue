<template>
  <header v-if="message !== ''" :style="`background-image:url(${bgImage})`" class="bg-gold sans-serif" >
    <div class="mw9 center pa4 pv5 pv6-ns pb6-ns ph7-l">
      <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
        <span class="bg-black-90 lh-copy white pa1 ph2 tracked-tight">
          {{ message }}
        </span>
      </h3>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Hello Human"
    },
    bgImage: {
      type: String,
      default:
        "https://instagram.flhr4-1.fna.fbcdn.net/vp/5848a40c5dc6d10f3640bc03722cbd62/5C1F216C/t51.2885-15/e35/35617071_193034048022961_6300091736123244544_n.jpg"
    }
  }
}
</script>

<style scoped>
header {
  background-size: cover;
}
</style>
