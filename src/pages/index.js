/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { navigate, Router } from "@reach/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Fragment } from "react";
import Columns from "react-columns";
import Helmet from "react-helmet";
import { DropDownMenu, Grid, H2, H3, P2, Section, Spacer } from "superlinear-react-ui";
import { content, tags } from "../../content";
import ContentCard from "../components/ContentCard";
import Highlight from "../components/Highlight";
import Page from "../components/Page";
import StyledA from "../components/StyledA";

const IndexPage = () => {
  // Use a shared key to that animation understands its the same component
  const sharedKey = "__index__";

  return (
    <Page
      title=""
      description="A crowd-sourced collection of the best email tips, workflows & offers to dominate your inbox."
    >
      <Helmet
        meta={[
          {
            name: "robots",
            content: "noindex",
          },
        ]}
      />
      <AnimateSharedLayout type="crossfade">
        <Router>
          <PageContent key={sharedKey} path="/" />
          <PageContent key={sharedKey} path="/t/:tipId" />
          <PageContent key={sharedKey} path="/:tagId" />
          <PageContent key={sharedKey} path="/:tagId/:tipId" />
        </Router>
      </AnimateSharedLayout>
    </Page>
  );
};

const PageContent = props => {
  const { tagId: currentTag = "all", tipId } = props;
  const tagsValues = Object.keys(tags);
  const tagNames = Object.values(tags).map(v => v.name);

  const currentTagName = tags[currentTag].name;

  const handleSelectTag = tag => {
    if (tag === "all") {
      navigate("/");
    } else {
      navigate(`/${tag}`);
    }
  };

  const handleSelectTip = tip => {
    if (tipId) {
      if (currentTag && currentTag !== "all") {
        navigate(`/${currentTag}`);
      } else {
        navigate("/");
      }
    } else {
      if (currentTag && currentTag !== "all") {
        navigate(`/${currentTag}/${tip.id}`);
      } else {
        navigate(`t/${tip.id}`);
      }
    }
  };

  const selectedTip = tipId ? content.find(tip => tip.id === tipId) : null;

  return (
    <Fragment>
      <Section width="56rem" center>
        <Spacer size="xxxl" />
        <Logo />
        <Spacer />
        <H2 align="center">You're doing email wrong.</H2>
        <H3 align="center" style={{ maxWidth: "46rem" }}>
          Here’s how the most productive people get to inbox zero. <Highlight>Tips</Highlight>,{" "}
          <Highlight>workflows</Highlight> and <Highlight>apps</Highlight> to dominate your inbox.
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
            onSelect={handleSelectTag}
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
        <Columns
          queries={[
            {
              columns: 1,
              query: "min-width: 0px",
            },
            {
              columns: 2,
              query: "min-width: 680px",
            },
            {
              columns: 3,
              query: "min-width: 1250px",
            },
            {
              columns: 4,
              query: "min-width: 1800px",
            },
          ]}
          gap="10px"
        >
          {content.map(tip => {
            const key = tip.id;
            const tag = tip.tag;
            const show = currentTag === tag || currentTag === "all";

            return (
              <ContentCard
                key={key}
                show={show}
                element={tip}
                onTagClick={() => handleSelectTag(tag === currentTag ? "all" : tag)}
                onLinkClick={() => handleSelectTip(tip)}
              />
            );
          })}
        </Columns>
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
      <AnimatePresence>
        {selectedTip && (
          <Fragment>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 0,
                background: "rgba(0,0,0,.2)",
              }}
            />
            <motion.div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
              }}
            >
              <ContentCard
                id={selectedTip.id}
                show={selectedTip}
                element={selectedTip}
                style={{
                  maxWidth: "34em",
                }}
                onLinkClick={handleSelectTip}
              />
            </motion.div>
          </Fragment>
        )}
      </AnimatePresence>
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

export default IndexPage;
