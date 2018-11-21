<template>
  <article>
    <gwawr-hero :message="message" />

    <main>
      <div class="columns">
        <div v-for="n in 4" :key="n" class="column">
          <gwawr-project-card
            v-for="(project, index) in projects"
            v-if="index % 4 === n - 1"
            :idx="index"
            :key="index"
            :title="$prismic.dom.RichText.asText(project.data.title)"
            :url="`/projects/${project.uid}`"
            :image="`https://via.placeholder.com/250`"
          />
        </div>
      </div>
    </main>
  </article>
</template>

<script>
import GwawrHero from "~/components/GwawrHero"
import GwawrProjectCard from "~/components/GwawrProjectCard"
// Have to install main object here in order to access query predicates method
import Prismic from "prismic-javascript"

export default {
  components: {
    GwawrHero,
    GwawrProjectCard
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

    let document = await app.$prismic.api.getByUID("page", "projects")

    let ret = []

    if (projects) {
      ret.projects = projects
    }
    if (document) {
      ret.title =
        app.$prismic.dom.RichText.asText(document.data.title) ||
        "Gwawr - Sam Carrington - Projects"
      ret.meta = {
        title: "",
        description: ""
      }
      ret.bgImage = ""
      /*
        title: app.$prismic.dom.RichText.asText(document.data.title),
        meta: {
          title: app.$prismic.dom.RichText.asText(document.data.meta_title),
          description: app.$prismic.dom.RichText.asText(
            document.data.meta_description
          )
        },
        bgImage: app.$prismic.dom.Link.url(document.data.banner_image)
         */
    }
    return ret
  }
}
</script>

<style scoped />
