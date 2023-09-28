const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/content-page.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables;
          // and is passed to layout file
          slug: node.slug,
        },
      })
    })
  })
}