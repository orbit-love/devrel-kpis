import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = props => {
  const { src, width = "100%", maxWidth = "100%", alt, style: providedStyle = {} } = props;

  const style = {
    width: width,
    maxWidth: maxWidth,
    height: "auto",
    objectFit: "contain"
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(src);
        });
        if (!image) {
          return null;
        }

        return <Img alt={alt} fluid={image.node.childImageSharp.fluid} style={{ ...style, ...providedStyle }} />;
      }}
    />
  );
};

export default Image;
