const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      projects: allContentfulPortfolioProjects {
        edges {
          node {
            contentful_id
            description
            featured
            id
            live
            source
            title
            image {
              gatsbyImageData(placeholder: BLURRED)
            }
            tags {
              _1
              _2
              _3
              _4
              _5
              _6
            }
          }
        }
      }
    }
  `)

  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.contentful_id}`,
      component: path.resolve("src/templates/project-template.js"),
      context: {
        slug: node.contentful_id,
      },
    })
  })
}
