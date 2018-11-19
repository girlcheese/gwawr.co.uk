<template>
  <article>
    <gwawr-hero
      :message="project.fields.title"
      :bg-image="
        project.fields.bannerImage
          ? project.fields.bannerImage.fields.file.url
          : ''
      "
    />
    <main class="section">
      <div class="container content" v-html="parseDown(project.fields.body)" />
    </main>
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"
import { createClient } from "~/plugins/contentful.js"
import "markdown-it"

const client = createClient()

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
      message: null
    }
  },
  head() {
    return {
      title: `Sam Carrington - Projects - ${this.project.fields.title}`
    }
  },
  asyncData({ env, params }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_PROJECT_POST_TYPE_ID,
        "fields.slug": params.slug
      })
    ])
      .then(([projects]) => {
        return {
          project: projects.items[0]
        }
      })
      .catch(console.error)
  },
  methods: {
    parseDown(data) {
      let md = require("markdown-it")()
      return md.render(data)
    }
  }
}
</script>

<style scoped></style>
