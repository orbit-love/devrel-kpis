import React, { useEffect } from "react";
import {
  UIContextProvider,
  Container,
  Header,
  useUpdateConfig,
  useResetConfig,
  useDarkMode
} from "superlinear-react-ui";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import urls from "../urls";
import { baseConfig, darkConfig } from "../config";
import SEO from "./seo";
import StyledLink from "./StyledLink";

const Page = props => {
  const {
    title,
    excerpt,
    canonical_url,
    card,
    background,
    withSidebar,
    children,
    noHeader = false,
    links,
    permanentLinks,
    loading,
    hideChildrenWhileLoading = false
  } = props;

  const {
    site: {
      siteMetadata: { title: siteTitle }
    }
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
              {!noHeader && (
                <Header
                  leftComponents={<StyledLink to={urls.home()}>{siteTitle}</StyledLink>}
                  rightComponents={
                    links || (
                      <>
                        <StyledLink to={urls.blog()}>Blog</StyledLink>
                      </>
                    )
                  }
                  permanentComponents={permanentLinks}
                />
              )}
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
