/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, Fragment, useEffect } from "react";
import Page from "../components/Page";
import {
  P1,
  P2,
  H2,
  H3,
  H4,
  Icon,
  HStack,
  VStack,
  Card,
  Spacer,
  Section,
  DropDownMenu,
  SubtleCard,
  useWindow,
  useConfig,
  Grid
} from "superlinear-react-ui";
import Helmet from "react-helmet";
import { content, tags } from "../../content";
import StyledA from "../components/StyledA";
import Highlight from "../components/Highlight";
import { useQueryParam } from "../hooks/useQueryParam";
import { motion, AnimatePresence } from "framer-motion";
import Linkify from "react-linkify";
import Columns from "react-columns";

const IndexPage = () => {
  return (
    <Page
      title=""
      description="A crowd-sourced collection of the best email tips, workflows & offers to dominate your inbox."
    >
      <Helmet
        meta={[
          {
            name: "robots",
            content: "noindex"
          }
        ]}
      />
      <PageContent />
    </Page>
  );
};

const PageContent = () => {
  const config = useConfig();
  const window = useWindow();

  const urlTag = useQueryParam("tag");

  // solving issue with gatsby not picking up changes in style after re-hydration
  // https://github.com/gatsbyjs/gatsby/issues/14601
  const [render, setRender] = useState(0);
  useEffect(() => setRender(1), [setRender]);

  const tagsValues = Object.keys(tags);
  const tagNames = Object.values(tags).map(v => v.name);

  const [currentTag, setCurrentTag] = useState(tags[urlTag] ? urlTag : "all");

  const currentTagName = tags[currentTag].name;

  function handleSelectTag(tag) {
    setCurrentTag(tag);
    updateUrlTag(tag, window);
  }

  return (
    <Fragment key={render}>
      <Section width="56rem" center>
        <Spacer size="xxxl" />
        <Logo />
        <Spacer />
        <H2 align="center">You're doing email wrong.</H2>
        <H3 align="center" style={{ maxWidth: "46rem" }}>
          Here’s how the most productive people get to inbox zero. <Highlight>Tips</Highlight>,{" "}
          <Highlight>workflows</Highlight> and <Highlight>offers</Highlight> to dominate your inbox.
        </H3>
        <Grid width="22em">
          <StyledA
            href="https://github.com/superlinear-hq/inboxzero-web/edit/master/content.js"
            icon="github"
            type="primary"
            target="_blank"
            rel="noopener"
          >
            Contribute
          </StyledA>
          <DropDownMenu
            buttonWidth="100%"
            fullWidth
            innerIcon="chevronDown"
            iconSide="right"
            label={currentTagName}
            options={tagsValues}
            optionsNames={tagNames}
            onSelect={value => {
              handleSelectTag(value);
            }}
          />
        </Grid>
        <Spacer />
        <P2>
          Follow{" "}
          <a href="https://twitter.com/linuz90" target="_blank" rel="noopener noreferrer">
            Fabrizio
          </a>{" "}
          and{" "}
          <a href="https://twitter.com/frankdilo" target="_blank" rel="noopener noreferrer">
            Francesco
          </a>{" "}
          for updates
        </P2>
      </Section>
      <Section width="100%">
        <AnimatePresence>
          <Columns
            queries={[
              {
                columns: 1,
                query: "min-width: 0px"
              },
              {
                columns: 2,
                query: "min-width: 680px"
              },
              {
                columns: 3,
                query: "min-width: 1100px"
              },
              {
                columns: 4,
                query: "min-width: 1700px"
              }
            ]}
            gap="10px"
          >
            {content.map((el, index) => {
              const { tag, author, body, url, label, preview_image, source_url, offer, chrome_extension } = el;

              const show = currentTag === tag || currentTag === "all";

              const key = `${tag}${author.name}${index}${show}`;

              if (!show) return null;

              return (
                <AnimatedDiv key={key} id={key}>
                  <Card inline width style={{ marginBottom: "20px" }}>
                    <HStack
                      align="right"
                      vAlign="center"
                      style={{ position: "absolute", top: "9px", right: "9px" }}
                      gap="4px"
                    >
                      {source_url && (
                        <a href={source_url} target="_blank" rel="noopener noreferrer" style={{ borderBottom: "none" }}>
                          <Icon name="link" color={config.colors.c4} size="16px" />
                        </a>
                      )}
                      <Tag
                        tag={tag}
                        onClick={() => {
                          handleSelectTag(tag === currentTag ? "all" : tag);
                        }}
                      />
                    </HStack>
                    {author && (
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ borderBottom: "none" }}>
                        <HStack gap="4px" noWrap>
                          <img
                            src={`https://unavatar.now.sh/${author.avatar}`}
                            alt={author.name}
                            css={css`
                              width: 46px;
                              height: 46px;
                              border-radius: 50%;
                            `}
                          />
                          <VStack gap={0}>
                            <H4>{author.name}</H4>
                            <P2 noWrap>{author.bio}</P2>
                          </VStack>
                        </HStack>
                      </a>
                    )}
                    {body && (
                      <P1 style={{ marginTop: "1em", whiteSpace: "pre-line" }}>
                        <Linkify>{body}</Linkify>
                      </P1>
                    )}
                    {preview_image && (
                      <img
                        style={{
                          marginTop: "1em",
                          maxWidth: "100%",
                          borderRadius: "6px",
                          border: `1px solid ${config.colors.uiBorderColor}`,
                          maxHeight: "240px",
                          objectFit: "cover",
                          objectPosition: "top"
                        }}
                        src={preview_image}
                        alt="Preview"
                      />
                    )}
                    {offer && (
                      <a
                        href={offer.url}
                        style={{ marginTop: "1em", borderBottom: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SubtleCard color="hsl(12, 100%, 62%)">
                          <HStack gap="0.5em">
                            <Icon size="2em" name="couponBold" color="hsl(12, 100%, 62%)" />
                            <VStack gap={0}>
                              <H4 color="hsl(12, 30%, 20%)">{offer.title}</H4>
                              <P2 color="hsl(12, 100%, 62%)">{offer.subtitle}</P2>
                            </VStack>
                          </HStack>
                        </SubtleCard>
                      </a>
                    )}
                    {url && (
                      <StyledA
                        style={{ marginTop: "1em" }}
                        type="primary"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label || "Get it"}
                      </StyledA>
                    )}
                    {chrome_extension && (
                      <a
                        href={chrome_extension.url}
                        style={{ marginTop: "1em", borderBottom: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SubtleCard color="rgb(80,80,80)">
                          <Grid columns="3em 1fr auto" gap="0.5em" vAlign="center">
                            <img src={chrome_extension.icon} style={{ width: "3em" }} alt={chrome_extension.title} />
                            <VStack gap={0}>
                              <H4 color="hsl(12, 30%, 20%)" noWrap>
                                {chrome_extension.title}
                              </H4>
                              <P2 noWrap>Add to Google Chrome</P2>
                            </VStack>
                            <span
                              css={css`
                                display: inline-block;
                                background: #4285f4;
                                padding: 1px 12px;
                                border-radius: 5px;
                                p {
                                  font-size: 16px;
                                  font-weight: 500;
                                }
                                @media (max-width: 640px) {
                                  display: none;
                                }
                              `}
                            >
                              <P2 color="white">INSTALL</P2>
                            </span>
                          </Grid>
                        </SubtleCard>
                      </a>
                    )}
                  </Card>
                </AnimatedDiv>
              );
            })}
          </Columns>
        </AnimatePresence>
        <Spacer size="xxxl" />
        <P2 align="center">
          Made by{" "}
          <a href="https://twitter.com/linuz90" target="_blank" rel="noopener noreferrer">
            Fabrizio
          </a>{" "}
          and{" "}
          <a href="https://twitter.com/frankdilo" target="_blank" rel="noopener noreferrer">
            Francesco
          </a>{" "}
          with{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
          ,{" "}
          <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
            Framer Motion
          </a>{" "}
          and{" "}
          <a href="https://zeit.co/" target="_blank" rel="noopener noreferrer">
            Zeit
          </a>
          .
        </P2>
      </Section>
    </Fragment>
  );
};

const Tag = ({ tag, onClick }) => {
  if (!tag) return null;

  const thisTag = tags[tag];

  return (
    <span
      onClick={onClick}
      css={css`
        display: inline-block;
        background: ${thisTag.color}22;
        padding: 1px 6px;
        border-radius: 5px;
        cursor: pointer;
        p {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 500;
        }
      `}
    >
      <P2 color={thisTag.color}>{thisTag.name}</P2>
    </span>
  );
};

export const AnimatedDiv = ({ show, id, children }) => (
  <motion.div
    layoutId={id}
    initial={{ opacity: 0, transform: "scale(0.8)" }}
    animate={{ opacity: 1, transform: "scale(1)" }}
    exit={{ opacity: 0, transform: "scale(0.8)" }}
  >
    {children}
  </motion.div>
);

const Logo = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <circle cx="48" cy="48" r="48" fill="#25242B" />
      <path
        opacity="0.06"
        d="M21.6824 88.1421C26.9539 91.5981 32.8546 93.9821 39.0474 95.1577C45.2403 96.3334 51.604 96.2778 57.7754 94.994C63.9467 93.7103 69.8048 91.2236 75.0151 87.6759C80.2254 84.1283 84.686 79.5891 88.142 74.3175C91.5981 69.046 93.982 63.1454 95.1577 56.9525C96.3334 50.7597 96.2777 44.3959 94.994 38.2246C93.7103 32.0532 91.2236 26.1952 87.6759 20.9848C84.1282 15.7745 79.5891 11.314 74.3175 7.85791L48 48L21.6824 88.1421Z"
        fill="white"
      />
      <rect x="40.5283" y="34.1887" width="14.9434" height="27.6226" rx="7.4717" stroke="white" strokeWidth="3.16981" />
      <path d="M41.2075 57.9623L54.3395 38.0377" stroke="white" strokeWidth="3.16981" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H96V96H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function updateUrlTag(tag, window) {
  if (window.history.pushState) {
    const newUrl =
      tag === "all"
        ? window.location.protocol + "//" + window.location.host + window.location.pathname
        : window.location.protocol + "//" + window.location.host + window.location.pathname + `?tag=${tag}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
}

export default IndexPage;
