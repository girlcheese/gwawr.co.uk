<template>
  <article>
    <gwawr-hero :message="message" />

    <main class="is-desktop is-gapless">
      <gwawr-project-tile
        v-for="(project, index) in projects"
        :key="index"
        :title="$prismic.dom.RichText.asText(project.data.title)"
        :url="`/projects/${project.uid}`"
        :image="`https://via.placeholder.com/250`"
      />
    </main>
    <ul>
      <li v-for="(project, index) in projects" :key="index"></li>
    </ul>
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
// Have to install main object here in order to access query predicates method
import Prismic from "prismic-javascript"

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
  async asyncData({ app }) {
    let projects = await app.$prismic.api
      .query(Prismic.Predicates.at("document.type", "project"), {
        orderings: "[my.project.date desc]"
      })
      .then(response => response.results)

    if (projects) {
      console.log(projects)
      return {
        projects: projects
        // title: app.$prismic.dom.RichText.asText(document.data.title),
        // meta: {
        //   title: app.$prismic.dom.RichText.asText(document.data.meta_title),
        //   description: app.$prismic.dom.RichText.asText(
        //     document.data.meta_description
        //   )
        // },
        // bgImage: app.$prismic.dom.Link.url(document.data.banner_image)
      }
    } else {
      return []
    }
    // return Promise.all([
    //   client.getEntries({
    //     content_type: env.CTF_PROJECT_POST_TYPE_ID,
    //     order: "-fields.date"
    //   })
    // ])
    //   .then(([projects]) => {
    //     return {
    //       projects: projects.items
    //     }
    //   })
    //   .catch(console.error)
  }
}
</script>

<style scoped>
.test {
  columns: 1;
}
</style>
