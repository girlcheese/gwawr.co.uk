<template>
  <nav>
    <ul>
      <li><nuxt-link to="/" exact>Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/projects">Projects</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  display: inline;
}

.nuxt-link-active {
  background-color: #efc14e;
}
</style>
