module.exports = {
  siteMetadata: {
    title: "DevRel KPIs",
    description: "Measure and prove ROI of DevRel and Community.",
    author: "@orbitmodel",
    siteUrl: "https://devrel-kpis.com",
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
