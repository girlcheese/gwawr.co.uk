<template>
  <section class="container" />
</template>

<script>
export default {
  validate({ params }) {
    // Must be a slug
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.id)
  }
}
</script>

<style scoped>
</style>
