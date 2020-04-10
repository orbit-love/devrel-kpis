/** @jsx jsx */
import { jsx } from "@emotion/core";
import { P1 } from "superlinear-react-ui";
import { useStaticQuery, graphql } from "gatsby";
import { useConfig } from "superlinear-react-ui";

const PostAuthor = props => {
  const config = useConfig();
  const { frontmatter, draft } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            blogAuthors {
              id
              name
              url
            }
          }
        }
      }
    `
  );

  const { author, date } = frontmatter;
  const blogAuthors = site.siteMetadata.blogAuthors;
  const foundAuthor = blogAuthors.find(a => a.id === author);

  return (
    <div>
      <P1 color={config.colors.c4}>
        {draft && "Draft by "}
        <a target="_blank" rel="noopener noreferrer" href={foundAuthor.url}>
          {foundAuthor.name}
        </a>
        , {date}
      </P1>
    </div>
  );
};

export default PostAuthor;
