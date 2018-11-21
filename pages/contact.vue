<template>
  <article>
    <gwawr-hero :message="message" :bg-image="bgImage" />
    <section class="section">
      <div class="container content">
        <p>I'm on the socials. And happy to talk.</p>
      </div>
    </section>
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"

export default {
  components: {
    GwawrHero
  },

  asyncData() {
    return {
      name: process.static ? "static" : process.server ? "server" : "client"
    }
  },
  data: function() {
    return {
      message: "Touch me...",
      bgImage:
        "https://instagram.flhr4-1.fna.fbcdn.net/vp/da56647decfa42830cbad408aa58274b/5C209E2F/t51.2885-15/e35/18160894_1686340401662268_8786689272917786624_n.jpg"
    }
  },
  head: {
    title: "Gwawr - Sam Carrington - Contact Me"
  }
}
</script>
