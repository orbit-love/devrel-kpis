module.exports = {
  siteMetadata: {
    title: "inboxze.ro",
    description: "You're doing email wrong. Here’s how the most productive people manage their inbox.",
    author: "@mailbrew",
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
        trackingId: "UA-23035506-17",
        head: true,
        respectDNT: true,
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
