const Prismic = require("prismic-javascript")

const config = {
  apiEndpoint: process.env.PRISMIC_URL + "/api/v2"
}

module.exports = {
  getApi() {
    return Prismic.getApi(config.apiEndpoint) // returns promise compatible object
  }
}
