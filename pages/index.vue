<template>
  <article>
    <gwawr-hero :message="message"/>
    <main class="pa4 ph7-l georgia mw9-l center">
      <p class="f5 f3-ns lh-copy measure georgia">
        Theodore Sturgeon was a science fiction author, critic, and the basis for Kurt Vonnegut's recurring character Kilgore Trout. He was prolific, authoring over 200 pieces himself and critiquing around 400 others.
      </p>
    </main>
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"

export default {
  components: {
    GwawrHero
  },
  data: function() {
    return {
      message: "Hi I'm Sam"
    }
  }
}
</script>

<style scoped>
header {
  background-image: url(https://instagram.flhr4-1.fna.fbcdn.net/vp/5848a40c5dc6d10f3640bc03722cbd62/5C1F216C/t51.2885-15/e35/35617071_193034048022961_6300091736123244544_n.jpg);
  background-size: cover;
}
</style>
