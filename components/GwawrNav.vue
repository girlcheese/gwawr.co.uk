<template>
  <header>
    <nav
      class="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          @click="toggleMenu"
        >
          <span aria-hidden="true" /> <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link
            to="/"
            exact
            active-class="nuxt-link-active is-active"
            class="navbar-item"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/about"
            active-class="nuxt-link-active is-active"
            class="navbar-item"
            >About</nuxt-link
          >
          <nuxt-link
            to="/projects"
            active-class="nuxt-link-active is-active"
            class="navbar-item"
            >Projects</nuxt-link
          >
          <nuxt-link
            to="/contact"
            active-class="nuxt-link-active is-active"
            class="navbar-item"
            >Contact</nuxt-link
          >
        </div>
        <div class="navbar-end">
          <div v-if="false" class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a href="#" class="tw-button button">
                  <span class="icon">
                    <i class="fab fa-twitter" aria-hidden="true" />
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu: function(event) {
      const target = event.target.dataset.target
      const $target = document.getElementById(target)
      event.target.classList.toggle("is-active")
      $target.classList.toggle("is-active")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
h1 {
  width: 90px;
  height: 40px;
  display: inline;
  text-indent: -9999px;
}
</style>
