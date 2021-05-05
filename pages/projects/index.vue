<template>
  <article>
    <gwawr-hero :message="message" />

    <main class="is-desktop is-gapless">
      <gwawr-project-tile
        v-for="(project, index) in projects"
        :key="index"
        :title="project.fields.title"
        :url="`/projects/${project.fields.slug}`"
        :image="
          project.fields.thumbImage
            ? project.fields.thumbImage.fields.file.url
            : ''
        "
      />
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
import GwawrHero from '~/components/GwawrHero'
import GwawrProjectTile from '~/components/GwawrProjectTile'

import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    GwawrHero,
    GwawrProjectTile,
  },
  asyncData({ env, $config: { ctf } }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_PROJECT_POST_TYPE_ID,
        order: '-fields.date',
      }),
    ])
      .then(([projects]) => {
        return {
          projects: projects.items,
        }
      })
      .catch((err) => {
        console.error(err)
      })
  },
  data() {
    return {
      message: "Things I've done",
      projects: null,
    }
  },
  head: {
    title:
      "Sam Carrington - Projects; Budweiser, Sainsbury's, Nando's, Premier League and more",
  },
}
</script>

<style scoped>
.test {
  columns: 1;
}
</style>
