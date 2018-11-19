<template>
  <article>
    <gwawr-hero :message="message" :bg-image="bgImage" class="is-1by2" />
    <main class="section">
      <div class="container content">
        <p class="">
          I'm a passionate technologist with a wealth of experience in
          innovative brand communication, ecommerce and content management. I'm
          happiest when solving problems, and leading teams to solve them.
        </p>
        <p class="">
          In the 20 years I've been building for the web I've seen technologies
          grow and die, habits mutate and adapt to that change, and seen ample
          evidence supporting
          <nuxt-link
            to="https://blog.codinghorror.com/the-principle-of-least-power/"
            >Atwood's Law</nuxt-link
          >.
        </p>
      </div>
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
    title: "Gwawr - Sam Carrington - Hi!",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Sam Carrington is an experienced engineering lead with 20 years designing and building " +
          "products on the web. He's worked with big brands on campaign and platforms builds," +
          "and led teams of developers through large build and integration projects."
      }
    ]
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
