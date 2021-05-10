<template>
  <div class="lg:w-1/3 sm:w-1/2 p-4">
    <nuxt-link
      v-if="title !== null"
      :style="`background:url(${image}) no-repeat center center; background-size: cover;`"
      :to="url"
      :title="title"
      class="flex relative"
    >
      <img
        alt="gallery"
        class="absolute inset-0 w-full h-full object-cover object-center"
        :src="image"
      />
      <div
        class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80"
      >
        <h2 class="title-font text-lg font-medium text-gray-900 mb-3">
          {{ title }}
        </h2>
        <!--        <h2 class="text-sm title-font font-medium text-indigo-500 mb-1"></h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>-->
        <!--        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>-->
      </div>
    </nuxt-link>
    <!--    <div class="flex relative">-->
    <!--      -->
    <!--      <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">-->
    <!--        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>-->
    <!--        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>-->
    <!--        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/500.png/09f/fff',
    },
    url: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style scoped>
.subtitle {
  display: none;
}

.is-1x1 {
  padding-bottom: 100%;
}
</style>
