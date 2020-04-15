import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../../static/favicon.ico";
import appleTouchIcon from "../../static/apple-touch-icon-precomposed.png";

function SEO({ description, lang, meta, keywords, title, card }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaCard = `${site.siteMetadata.siteUrl}/cards/${card || "card.png"}`;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      link={[
        { rel: "stylesheet", href: `https://use.typekit.net/qru7zue.css` },
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon}` },
        { rel: "shortcut icon", type: "image/png", href: favicon },
        { rel: "apple-touch-icon-precomposed", type: "image/png", href: appleTouchIcon }
      ]}
      script={[]}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: metaTitle
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:image",
          content: metaCard
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author
        },
        {
          name: "twitter:title",
          content: metaTitle
        },
        {
          name: "twitter:description",
          content: metaDescription
        },
        {
          name: "twitter:image",
          content: metaCard
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", ")
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: ""
};

export default SEO;
