import { graphql, Link } from "gatsby";
import React from "react";
import { H2, Section, HStack, Button, P1, Icon, Center } from "superlinear-react-ui";
import { Helmet } from "react-helmet";
import PostAuthor from "../components/PostAuthor";
import SEO from "../components/seo";
import "../main.css";
import createTwitterLink from "../utils/createTwitterLink";
import BlogPostStyledWrapper from "../components/style/BlogPostStyledWrapper";

export default function Template(props) {
  const { data } = props;

  const { frontmatter, html } = data.thisPost;

  const { title, excerpt, card, author, draft, path, canonical_base_url } = frontmatter;

  let thisPostIndex = data.allPosts.edges.findIndex(
    post => post.node.frontmatter.title == data.thisPost.frontmatter.title
  );

  const prevPost = data.allPosts.edges[thisPostIndex - 1];
  const nextPost = data.allPosts.edges[thisPostIndex + 1];

  let blog = false;

  if (author) blog = true;

  let canonical_url = null;

  if (canonical_base_url) {
    canonical_url = canonical_base_url + path;
  } else {
    canonical_url = props.location.href;
  }

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        canonical={canonical_url}
        card={card && `https://inboxze.ro/cards/${card}`}
      />
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
        {blog && <PostAuthor frontmatter={frontmatter} draft={draft} />}
        <H2>
          <Link to={path}>{title}</Link>
        </H2>
        <BlogPostStyledWrapper dangerouslySetInnerHTML={{ __html: html }} />
        {blog && (
          <Center>
            {" "}
            // Just center stuff
            <HStack>
              <Button
                secondary
                href={createTwitterLink(`${title}, by @${authors[author].twitter}`, `https://inboxze.ro${path}`)}
                color="accent1"
                id="3"
              >
                <Icon name="twitter" />
                Share this post
              </Button>

              <Button secondary href="https://buttondown.email/linuz90" color="accent3">
                <Icon name="email" />
                Subscribe
              </Button>
            </HStack>
            {!nextPost && prevPost && (
              <P1 style={{ marginTop: "2em", color: colors.light }}>
                Read next: <Link to={prevPost.node.frontmatter.path}>{prevPost.node.frontmatter.title}</Link>
              </P1>
            )}
            {nextPost && (
              <P1 style={{ marginTop: "2em", color: colors.light }}>
                Read next: <Link to={nextPost.node.frontmatter.path}>{nextPost.node.frontmatter.title}</Link>
              </P1>
            )}
          </Center>
        )}
      </Section>
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
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
