<template>
  <article>
    <gwawr-hero :message="message" :bg-image="bgImage"/>
    <main class="section">
      <div class="container content">
        <p>
          I'm on the socials. And happy to talk.
        </p>
      </div>
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Twitter</p>
              <a href="https://twitter.com/_gwawr">
                <span class="icon is-large">
                  <i class="fab fa-2x fa-twitter-square"/>
                </span>
              </a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Github</p>
              <a href="https://github.com/girlcheese">
                <span class="icon is-large">
                  <i class="fab fa-2x fa-github"/>
                </span>
              </a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Instagram</p>
              <a href="https://www.instagram.com/gwawr/">
                <span class="icon is-large">
                  <i class="fab fa-2x fa-instagram"/>
                </span>
              </a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Linked-in</p>
              <a href="https://www.linkedin.com/in/gwawr/">
                <span class="icon is-large">
                  <i class="fab fa-2x fa-linkedin"/>
                </span>
              </a>
            </div>
          </div>
        </nav>
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
