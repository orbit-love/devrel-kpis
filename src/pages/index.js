import React, { Fragment, useState, useEffect } from "react";
import { navigate, Router } from "@reach/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Columns from "react-columns";
import { DropDownMenu, Grid, H2, H3, P2, Section, Spacer } from "superlinear-react-ui";
import { content, tags } from "../../content";
import ContentCard from "../components/ContentCard";
import Highlight from "../components/Highlight";
import Page from "../components/Page";
import StyledA from "../components/StyledA";
import { Link } from "gatsby";

const IndexPage = () => {
  // Use a shared key to that animation understands its the same component
  const sharedKey = "__index__";

  return (
    <Page title="">
      <AnimateSharedLayout type="crossfade" transition={{ type: "spring", damping: 9, mass: 0.3, velocity: 20 }}>
        <Router>
          <PageContent key={sharedKey} path="/" />
          <PageContent key={sharedKey} path="/t/:tipId" />
          <TipShareCard key={sharedKey} path="/tip_card/:tipId" />
          <PageContent key={sharedKey} path="/:tagId" />
          <PageContent key={sharedKey} path="/:tagId/:tipId" />
          <PageContent key={sharedKey} path="/privacy-policy" />
        </Router>
      </AnimateSharedLayout>
    </Page>
  );
};

const PageContent = props => {
  const { path, tagId: currentTag = "all", tipId } = props;

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
        <H3 align="center" style={{ maxWidth: "48rem" }}>
          Here’s how the most productive people manage their inbox. A&nbsp;collection of <Highlight>tips</Highlight>,{" "}
          <Highlight>workflows</Highlight> and <Highlight>apps</Highlight>.
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
          Made by{" "}
          <a href="https://twitter.com/linuz90" target="_blank" rel="noopener noreferrer">
            Fabrizio
          </a>{" "}
          and{" "}
          <a href="https://twitter.com/frankdilo" target="_blank" rel="noopener noreferrer">
            Francesco
          </a>
          . Privacy Policy <Link to="/privacy-policy">here</Link>.
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
                isCurrentCard={false}
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
                background: "rgba(40,40,40,.5)",
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
                zIndex: 3,
                overflow: "scroll",
                WebkitOverflowScrolling: "touch",
                padding: "3em 1em",
              }}
            >
              <ContentCard
                isCurrentCard={true}
                show={selectedTip}
                element={selectedTip}
                style={{
                  margin: "auto",
                  pointerEvents: "auto",
                  width: "36em",
                  maxWidth: "100%",
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

const Logo = () => (
  <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <circle cx="53" cy="53" r="53" fill="black" />
      <path
        opacity="0.12"
        d="M35.0182 102.856C41.5654 105.218 48.5137 106.266 55.4662 105.943C62.4187 105.619 69.2393 103.929 75.5387 100.969C81.838 98.0089 87.4927 93.8373 92.1799 88.6922C96.867 83.547 100.495 77.529 102.856 70.9817C105.218 64.4345 106.266 57.4863 105.943 50.5337C105.619 43.5812 103.929 36.7606 100.969 30.4612C98.0089 24.1619 93.8373 18.5072 88.6921 13.82C83.5469 9.13287 77.5289 5.50503 70.9816 3.14363L52.9999 53L35.0182 102.856Z"
        fill="white"
      />
      <path d="M47 70L58.5 37.5" stroke="white" strokeWidth="1.5" />
      <path
        d="M31.826 59.492H36.16V52.386H32.376V49.9H38.8V59.492H42.298V62H31.826V59.492ZM35.368 46.622C35.368 46.1967 35.5073 45.852 35.786 45.588C36.0793 45.3093 36.4607 45.17 36.93 45.17H37.502C37.9713 45.17 38.3453 45.3093 38.624 45.588C38.9173 45.852 39.064 46.1967 39.064 46.622C39.064 47.062 38.9173 47.414 38.624 47.678C38.3307 47.942 37.9493 48.074 37.48 48.074H36.93C36.4607 48.074 36.0793 47.942 35.786 47.678C35.5073 47.414 35.368 47.062 35.368 46.622Z"
        fill="white"
      />
      <path
        d="M60.738 49.9H70.396V52.496L63.752 59.712C63.928 59.6973 64.1113 59.6753 64.302 59.646C64.4633 59.6313 64.632 59.624 64.808 59.624C64.9987 59.6093 65.182 59.602 65.358 59.602H70.638V62H60.562V59.404L67.228 52.21C67.0373 52.2247 66.8467 52.2393 66.656 52.254C66.4947 52.2687 66.3113 52.2833 66.106 52.298C65.9153 52.298 65.732 52.298 65.556 52.298H60.738V49.9Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H106V106H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TipShareCard = ({ tipId }) => {
  const tip = content.find(c => c.id === tipId);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        zIndex: 3,
        overflow: "scroll",
        WebkitOverflowScrolling: "touch",
        padding: "3em 1em",
      }}
    >
      <ContentCard
        screenshotMode
        isCurrentCard={true}
        show
        element={tip}
        style={{
          margin: "auto",
          pointerEvents: "auto",
          width: "36em",
          maxWidth: "100%",
        }}
      />
    </motion.div>
  );
};

export default IndexPage;
