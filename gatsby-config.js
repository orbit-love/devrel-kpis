module.exports = {
  siteMetadata: {
    title: "inboxze.ro",
    description: "Receive the best content from the sites and apps you love in beautiful, automated, newsletters.",
    author: "@",
    siteUrl: "https://inboxze.ro",
    blogAuthors: [
      {
        id: "fab",
        name: "Fabrizio",
        twitter: "linuz90",
        url: "https://twitter.com/linuz90"
      },
      {
        id: "frank",
        name: "Francesco",
        twitter: "frankdilo",
        url: "https://twitter.com/frankdilo"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-xml",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "/blog-pages"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              showCaptions: true
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-...",
        head: true,
        respectDNT: true,
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID", // Set Variation ID. 0 for original 1,2,3....
        cookieDomain: "inboxze.ro"
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .filter(edge => edge.node.frontmatter.author)
                .map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    custom_elements: [{ "content:encoded": edge.node.html }]
                  });
                });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
									filter: { frontmatter: { draft: { eq: null } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        author
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "inboxze.ro's blog"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://inboxze.ro"
      }
    }
  ]
};
