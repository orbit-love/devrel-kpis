/** @jsx jsx */
import { jsx } from "@emotion/core";
import { navigate, Link } from "gatsby";
import { H2, Button } from "superlinear-react-ui";
import PostAuthor from "./PostAuthor";
import BlogPostStyledWrapper from "./style/BlogPostStyledWrapper";

const PostPreview = ({ post }) => {
  // console.log(post);
  return (
    <div>
      <PostAuthor frontmatter={post.frontmatter} />
      <H2>
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </H2>
      <BlogPostStyledWrapper html={post.excerpt} />
      <Button
        type="secondary"
        onClick={() => {
          navigate(post.frontmatter.path);
        }}
        style={{ marginTop: ".7em" }}
      >
        Keep reading...
      </Button>
    </div>
  );
};

export default PostPreview;
