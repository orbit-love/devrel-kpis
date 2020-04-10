/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useConfig } from "superlinear-react-ui";

const BlogPostStyledWrapper = props => {
  const config = useConfig();

  const { c1, c4, c5, c7 } = config.colors;

  const { html, children } = props;

  const wrapperCSS = css`
    > div > p > .gatsby-resp-image-wrapper,
    > div > .gatsby-resp-image-figure,
    > div > p .gatsby-resp-image-figure,
    > div > .gatsby-resp-image-link,
    > div > p .gatsby-resp-image-link,
    > div > p > img {
      margin: 3em auto !important;
      box-shadow: none !important;
    }
    > div > p > .gatsby-resp-image-wrapper,
    > div > .gatsby-resp-image-figure,
    > div > p .gatsby-resp-image-figure,
    > div > .gatsby-resp-image-link,
    > div > p .gatsby-resp-image-link {
      @media (min-width: 1000px) {
        margin: 3em -3em !important;
        box-shadow: none !important;
      }
    }
    .gatsby-resp-image-link,
    .gatsby-resp-image-image {
      border-bottom: none !important;
      box-shadow: none !important;
    }
    p,
    ul,
    ol,
    blockquote {
      /* font-family: Lora, "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif; */
      color: ${c1};
      margin: 0.3em 0 1.15em;
      font-weight: 500;
      line-height: 1.75;
    }
    h2,
    h3,
    h4,
    h5 {
      color: ${c1};
      margin-top: 1.6em;
      margin-bottom: 0.7em;
      padding-bottom: 0.7em;
      border-bottom: 1px solid ${c7};
    }
    blockquote {
      padding-left: 1.5em;
      padding-right: 1.5em;
      margin-top: 1.5em;
      margin-bottom: 1.5em;
      font-style: italic;
      > * {
        color: ${c5};
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      border-bottom: 2px solid ${c4};
      /* font-weight: 700; */
      :hover {
        border-bottom: 2px solid ${c5};
      }
    }
    figcaption {
      font-size: 0.9em;
      color: ${c4};
      text-align: center;
      padding-top: 1em;
    }
    img {
      max-width: 100%;
      display: block;
    }

    code {
      font-size: 1.1em;
      color: hsla(15, 80%, 60%, 1);
      background: hsla(15, 80%, 60%, 0.1);
      padding: 0.35em 0.5em;
      border-radius: 0.2em;
    }

    hr {
      border: none;
      border-top: 1px solid ${c7};
    }
  `;

  return (
    <div css={wrapperCSS}>{children || <div dangerouslySetInnerHTML={html ? { __html: html } : undefined} />}</div>
  );
};

export default BlogPostStyledWrapper;
