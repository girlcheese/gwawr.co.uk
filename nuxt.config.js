const config = require("./.contentful.json")
const prismicConfig = require("./.prismic.json")

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "gwawr.co.uk",
    htmlAttrs: {
      lang: "en",
      class: "has-navbar-fixed-top"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Gwawr portfolio site using NuxtJS"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Add vendor CSS
   */
  css: ["~/assets/main.scss", "bulma/bulma.sass"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [
  // ],
  /*
   ** modules
   */
  modules: [
    ["@nuxtjs/google-analytics", { ua: "UA-366915-1" }],
    [
      "prismic-nuxt",
      {
        endpoint:
          (process.env.PRISMIC_URL ||
            prismicConfig.PRISMIC_URL ||
            "http://localhost:3000") + "/api/v2",
        linkResolver: function(doc, ctx) {
          return "/"
        }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    /**
     * PostCSS (not working) FIXME
     */
    postcss: [require("postcss-extend")(), require("postcss-hexrgba")()]
  },
  /**
   * Config vars
   */
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN:
      process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID || config.CTF_PERSON_ID,
    CTF_PROJECT_POST_TYPE_ID:
      process.env.CTF_PROJECT_POST_TYPE_ID || config.CTF_PROJECT_POST_TYPE_ID,
    PRISMIC_URL:
      process.env.PRISMIC_URL ||
      prismicConfig.PRISMIC_URL ||
      "http://localhost:3000"
  }
}
