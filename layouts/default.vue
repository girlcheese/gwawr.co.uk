<template>
  <div>
    <gwawr-nav />
    <nuxt />
    <gwawr-footer></gwawr-footer>
  </div>
</template>

<script>
import GwawrNav from '~/components/GwawrNav.vue'
import GwawrFooter from '~/components/GwawrFooter'

export default {
  components: {
    GwawrNav,
    GwawrFooter,
  },
}
</script>

<style lang="scss">
html {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button {
  display: inline-block;
  border-radius: 4px;
  margin-left: 15px;
  text-decoration: none;
  &--green {
    color: #3b8070;
    border: 1px solid #3b8070;
    &:hover {
      color: #fff;
      background-color: #3b8070;
    }
  }

  &--grey {
    border: 1px solid #35495e;
    color: #35495e;
    &:hover {
      color: #fff;
      background-color: #35495e;
    }
  }
}
</style>
