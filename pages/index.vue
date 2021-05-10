<template>
  <article class="w-full bg-white">
    <gwawr-hero :message="message" :bg-image="bgImage" class="is-1by2" />
    <main class="section container flex justify-center mx-auto p-10">
      <div class="content">
        <p class="pb-2">
          I'm a passionate technologist with a wealth of experience in
          innovative brand communication, ecommerce and content management. I'm
          happiest when solving problems, and leading teams to solve them.
        </p>
        <p class="pb-2">
          In the 20 years I've been building for the web I've seen technologies
          grow and die, habits mutate and adapt to that change, and seen ample
          evidence supporting
          <a href="https://blog.codinghorror.com/the-principle-of-least-power/"
            >Atwood's Law</a
          >.
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
  data() {
    return {
      message: "Hi, I'm Sam...",
      bgImage:
        'https://scontent-lhr3-1.cdninstagram.com/vp/59a053c321a5aa6d0bbd352bf2df9233/5C18597A/t51.2885-15/e35/31571296_228583177892464_2079103027003785216_n.jpg',
    }
  },
  head: {
    title: 'Gwawr - Sam Carrington - Hi!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Sam Carrington is an experienced engineering lead with 20 years designing and building ' +
          "products on the web. He's worked with big brands on campaign and platforms builds," +
          'and led teams of developers through large build and integration projects.',
      },
    ],
  },
}
</script>
