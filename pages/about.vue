<template>
  <article class="w-full bg-white">
    <gwawr-hero :message="message" :bg-image="bgImage" />
    <main class="section container flex justify-center mx-auto p-10">
      <div class="content">
        <p class="pb-2">
          I like using technology to solve problems. The most appealing features
          of building on the web for me are the need for combined technical and
          creative skills.
        </p>
        <p class="pb-2">
          I'm a JavaScript developer by trade, but have been a team leader and
          Technical Director for the past 10 years. However I still get my hands
          dirty with code occasionally. Some might say that's a dangerous thing.
          But in order to communicate effectively with both engineering teams
          and clients, it's very useful to be able to apply theory and
          demonstrate skills in depth.
        </p>
      </div>
    </main>
  </article>
</template>

<script>
import GwawrHero from '~/components/GwawrHero'

export default {
  components: {
    GwawrHero,
  },
  asyncData() {
    return {
      name: process.static ? 'static' : process.server ? 'server' : 'client',
    }
  },
  data() {
    return {
      message: 'Blurb',
      bgImage:
        'https://instagram.flhr4-1.fna.fbcdn.net/vp/5f747d58ea73272b56444ab572d137f5/5C392F44/t51.2885-15/e35/30085046_333821953689686_3758648665254658048_n.jpg',
    }
  },
  head: {
    title: 'Gwawr - Sam Carrington - Hi!',
  },
}
</script>
