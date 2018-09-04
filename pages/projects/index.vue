<template>
  <article>
    <gwawr-hero :message="message"/>
    <div v-for="(project, index) in projects" :key="index" class="fl w-100 w-50-m w-25-ns">
      <nuxt-link :to="`/projects/${project.fields.slug}`" class="db aspect-ratio aspect-ratio--1x1 dim">
        <span :aria-label="project.fields.title" role="img" style="background-image:url(http://mrmrs.github.io/photos/beyonce.jpg);" class="bg-center cover aspect-ratio--object">{{ project.fields.title }}</span>
      </nuxt-link>
    </div>
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
  head: {
    title: "Sam Carrington - Projects"
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
