<template>
  <article>
    <gwawr-hero :message="message"/>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <nuxt-link :to="`/projects/${project.fields.slug}`">{{ project.fields.title }}</nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"
import { createClient } from "~/plugins/contentful.js"

const client = createClient()

export default {
  components: {
    GwawrHero
  },
  data() {
    return {
      message: "My Projects",
      projects: null
    }
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_PROJECT_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then(([projects]) => {
        return {
          projects: projects.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped>
</style>
