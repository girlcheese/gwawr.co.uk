<template>
  <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-999">
    <nav class="f6 fw6 ttu tracked">
      <nuxt-link to="/" exact active-class="light-purple nuxt-link-active" class="link dim white dib mr3">Home</nuxt-link>
      <nuxt-link to="/about" active-class="light-purple nuxt-link-active" class="link dim white dib mr3" >About</nuxt-link>
      <nuxt-link to="/projects" active-class="light-purple nuxt-link-active" class="link dim white dib mr3">Projects</nuxt-link>
      <nuxt-link to="/contact" active-class="light-purple nuxt-link-active" class="link dim white dib">Contact</nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
h1 {
  width: 90px;
  height: 40px;
  display: inline;
  text-indent: -9999px;
}
</style>
