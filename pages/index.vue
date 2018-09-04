<template>
  <article>
    <gwawr-hero :message="message" :bg-image="bgImage"/>
    <main class="pa4 ph7-l georgia mw9-l center">
      <p class="f5 f3-ns lh-copy measure georgia">
        I'm a passionate technology leader with a wealth of experience in innovative brand communication, ecommerce and
        content management. I'm happiest when solving problems, and leading teams to solve them!
      </p>
      <p class="f5 f3-ns lh-copy measure georgia">
        In the 20 years I've been building for the web I've seen technologies grow and die, habits mutate and adapt to
        that change, and seen ample evidence supporting
        <nuxt-link to="https://blog.codinghorror.com/the-principle-of-least-power/">Atwood's Law</nuxt-link>.
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
  head: {
    title: "Gwawr - Sam Carrington - Hi!"
  },
  data: function() {
    return {
      message: "Hi, I'm Sam...",
      bgImage:
        "https://scontent-lhr3-1.cdninstagram.com/vp/59a053c321a5aa6d0bbd352bf2df9233/5C18597A/t51.2885-15/e35/31571296_228583177892464_2079103027003785216_n.jpg"
    }
  }
}
</script>
