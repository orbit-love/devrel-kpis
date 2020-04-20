import React, { useEffect } from "react";
import { UIContextProvider, Container, useUpdateConfig, useResetConfig, useDarkMode } from "superlinear-react-ui";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { baseConfig, darkConfig } from "../config";
import SEO from "./seo";

const Page = props => {
  const {
    title,
    excerpt,
    canonical_url,
    card,
    background,
    withSidebar,
    children,
    loading,
    hideChildrenWhileLoading = false,
  } = props;

  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  return (
    <UIContextProvider configOverrides={baseConfig}>
      {config => {
        return (
          <>
            <SEO title={title} description={excerpt} canonical={canonical_url} card={card} />
            <DarkModeProvider />
            <Container background={background} withSidebar={withSidebar}>
              <Helmet>
                <title>
                  {title} | {siteTitle}
                </title>
              </Helmet>
              {(!loading || !hideChildrenWhileLoading) &&
                (typeof children === "function" ? children(config) : children)}
            </Container>
          </>
        );
      }}
    </UIContextProvider>
  );
};

const DarkModeProvider = () => {
  const updateConfig = useUpdateConfig();
  const resetConfig = useResetConfig();
  const [darkMode] = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      updateConfig(darkConfig);
    } else {
      resetConfig();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return null;
};

export default Page;
