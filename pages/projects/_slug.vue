<template>
  <article>
    <gwawr-hero
      :message="$prismic.dom.RichText.asText(document.data.title)"
      :bg-image="bgImage"
    />
    <main class="section">
      <div
        class="container content"
        v-html="
          $prismic.dom.RichText.asHtml(
            document.data.description,
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
  validate({ params }) {
    // Must be a slug
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.slug)
  },
  data() {
    return {
      project: null,
      message: null,
      bgImage: null
    }
  },
  head() {
    return {
      title: `Sam Carrington - Projects - ${this.meta.title}`
    }
  },
  async asyncData({ params, app, error }) {
    console.log(params)
    let document = await app.$prismic.api.getByUID("project", params.slug)

    if (document) {
      return {
        document,
        title: app.$prismic.dom.RichText.asText(document.data.title),
        meta: {
          title: app.$prismic.dom.RichText.asText(document.data.title),
          description: ""
        },
        bgImage: ""
      }
    } else {
      error({ statusCode: 404, message: "Page not found" })
    }
  }
}
</script>

<style scoped></style>
