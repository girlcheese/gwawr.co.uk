<template>
  <article>
    <gwawr-hero
      :message="$prismic.dom.RichText.asText(document.data.title)"
      :bg-image="bgImage"
      class="is-1by2"
    />
    <main class="section">
      <div
        class="container content"
        v-html="
          $prismic.dom.RichText.asHtml(
            document.data.body,
            $prismic.linkResolver
          )
        "
      ></div>
    </main>
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"

export default {
  components: {
    GwawrHero
  },
  head() {
    return {
      title: `Gwawr - ${this.meta.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.meta.description
        }
      ]
    }
  },
  data() {
    return {
      message: null,
      bgImage: null
    }
  },
  async asyncData({ app, error }) {
    let document = await app.$prismic.api.getByUID("page", "home")

    if (document) {
      return {
        document,
        title: app.$prismic.dom.RichText.asText(document.data.title),
        meta: {
          title: app.$prismic.dom.RichText.asText(document.data.meta_title),
          description: app.$prismic.dom.RichText.asText(
            document.data.meta_description
          )
        },
        bgImage: app.$prismic.dom.Link.url(document.data.banner_image)
      }
    } else {
      error({ statusCode: 404, message: "Page not found" })
    }
  }
}
</script>
