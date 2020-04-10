const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

async function createMarkdownPages({ actions, graphql }) {
  const { createPage } = actions;

  const template = path.resolve("src/templates/BlogPost.js");

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              author
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {} // additional data can be passed via context
      });
    });
  });
}

exports.createPages = async options => {
  await createMarkdownPages(options);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value
    });
  }
};
