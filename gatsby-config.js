module.exports = {
  siteMetadata: {
    title: "inboxze.ro",
    description: "You're doing email wrong. Here’s how the most productive people manage their inbox.",
    author: "@",
    siteUrl: "https://inboxze.ro",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-xml",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-react-helmet",
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
              showCaptions: true,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
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
        cookieDomain: "inboxze.ro",
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://inboxze.ro",
      },
    },
  ],
};
