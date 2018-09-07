<template>
  <article>
    <gwawr-hero :message="message"/>

    <main>
      <gwawr-project-tile
        v-for="(project, index) in projects" :key="index"
        :title="project.fields.title"
        :url="`/projects/${project.fields.slug}`"
        :image="project.fields.thumbImage ? project.fields.thumbImage.fields.file.url : ''"/>
    </main>


    <!--
      <div class="fl w-50">
      <div class="fl w-100 w-25-ns">
      <div class="fl w-100 w-50-m w-25-ns">
      <div class="fl w-100 w-50-m w-25-l">
    -->
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"
import GwawrProjectTile from "~/components/GwawrProjectTile"

import { createClient } from "~/plugins/contentful.js"

const client = createClient()

export default {
  components: {
    GwawrHero,
    GwawrProjectTile
  },
  data() {
    return {
      message: "Things I've done",
      projects: null
    }
  },
  head: {
    title:
      "Sam Carrington - Projects; Budweiser, Sainsbury's, Nando's, Premier League and more"
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_PROJECT_POST_TYPE_ID,
        order: "-fields.date"
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
header {
  z-index: 100;
}
article main {
  z-index: 20;
}

main a {
  position: relative;
}

main .subtitle {
  position: absolute;
  top: 45%;
  left: 20%;
}
</style>
