import fs from 'fs'
import { createClient } from '../plugins/contentful.js'
const dynamicRoutes = async () => {
  const client = createClient()
  // fetch projects
  /**
   *
   * @type {EntryCollection<Array>}
   */
  const resForProjects = await client.getEntries({
    content_type: process.env.CTF_PROJECT_POST_TYPE_ID,
  })
  const routesForProjects = resForProjects.items.map((project) => {
    return {
      route: `/projects/${project.fields.slug}`,
      payload: project,
    }
  })
  const routes = routesForProjects
  return routes
}

export { dynamicRoutes }
