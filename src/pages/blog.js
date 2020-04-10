import { graphql } from "gatsby";
import React from "react";
import CookieBanner from "../components/CookieBanner";
import { Section } from "superlinear-react-ui";
import PostPreview from "../components/PostPreview";
import "../main.css";
import Page from "../components/Page";

const BlogPage = props => {
  const {
    data: {
      allMarkdownRemark: { edges }
    }
  } = props;

  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("blog")) // You can filter your posts based on some criteria
    .map(edge => <PostPreview key={edge.node.id} post={edge.node} />);

  return (
    <Page title="Blog">
      <CookieBanner />
      <Section width="54em">{Posts}</Section>
    </Page>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: null } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 500, format: HTML)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
          }
        }
      }
    }
  }
`;
