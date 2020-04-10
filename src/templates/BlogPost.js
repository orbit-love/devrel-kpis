import { graphql, Link } from "gatsby";
import React from "react";
import { H2, Section, HStack, Button, P1, Center } from "superlinear-react-ui";
import { Helmet } from "react-helmet";
import PostAuthor from "../components/PostAuthor";
import "../main.css";
import createTwitterLink from "../utils/createTwitterLink";
import BlogPostStyledWrapper from "../components/style/BlogPostStyledWrapper";
import Page from "../components/Page";

export default function BlogPost(props) {
  const { data } = props;
  const { site, thisPost, allPosts } = data;
  const { frontmatter, html } = thisPost;
  const { title, excerpt, card, author, draft, path } = frontmatter;
  const { blogAuthors, siteUrl } = site.siteMetadata;

  const thisPostIndex = allPosts.edges.findIndex(post => post.node.frontmatter.title === frontmatter.title);
  const prevPost = allPosts.edges[thisPostIndex - 1];
  const nextPost = allPosts.edges[thisPostIndex + 1];

  const postAuthor = blogAuthors.find(a => a.id === author);

  return (
    <Page title={title} description={excerpt} card={card}>
      {draft && (
        <Helmet
          meta={[
            {
              name: "robots",
              content: "noindex"
            }
          ]}
        />
      )}
      <Section width="54em">
        <PostAuthor frontmatter={frontmatter} draft={draft} />
        <H2>
          <Link to={path}>{title}</Link>
        </H2>
        <BlogPostStyledWrapper html={html} />

        <Center>
          <HStack>
            <Button
              type="secondary"
              icon="twitter"
              onClick={() => {
                const twitterLink = createTwitterLink(`${title}, by @${postAuthor.twitter}`, `${siteUrl}/${path}`);
                window.open(twitterLink, "_blank");
              }}
              id="3"
            >
              Share this post
            </Button>

            <Button type="secondary" icon="email" href="https://buttondown.email/linuz90">
              Subscribe
            </Button>
          </HStack>
          {!nextPost && prevPost && (
            <P1>
              Read next: <Link to={prevPost.node.frontmatter.path}>{prevPost.node.frontmatter.title}</Link>
            </P1>
          )}
          {nextPost && (
            <P1>
              Read next: <Link to={nextPost.node.frontmatter.path}>{nextPost.node.frontmatter.title}</Link>
            </P1>
          )}
        </Center>
      </Section>
    </Page>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
        blogAuthors {
          id
          name
          url
          twitter
        }
      }
    }
    thisPost: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        card
        author
        excerpt
        draft
      }
    }
    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { eq: null } } }
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
            draft
            card
          }
        }
      }
    }
  }
`;
