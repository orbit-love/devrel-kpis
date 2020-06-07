import { navigate, Router } from "@reach/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "gatsby";
import React, { Fragment } from "react";
import Columns from "react-columns";
import { DropDownMenu, Grid, H2, H3, P2, Section, Spacer } from "superlinear-react-ui";
import { content, tags } from "../../content";
import ContentCard from "../components/ContentCard";
import Highlight from "../components/Highlight";
import Page from "../components/Page";
import StyledA from "../components/StyledA";
import Logo from "../components/Logo";

const IndexPage = () => {
  // Use a shared key to that animation understands its the same component
  const sharedKey = "__index__";

  return (
    <Page title="">
      <AnimateSharedLayout type="crossfade" transition={{ type: "spring", damping: 9, mass: 0.3, velocity: 20 }}>
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
  const { tagId = "all", tipId } = props;

  const tagsValues = Object.keys(tags);
  const tagNames = Object.values(tags).map(v => v.name);

  const handleSelectTag = tag => {
    if (tag === "all") {
      navigate("/");
    } else {
      navigate(`/${tag}`);
    }
  };

  const handleSelectTip = tip => {
    if (tipId) {
      if (tagId && tagId !== "all") {
        navigate(`/${tagId}`);
      } else {
        navigate("/");
      }
    } else {
      if (tagId && tagId !== "all") {
        navigate(`/${tagId}/${tip.id}`);
      } else {
        navigate(`t/${tip.id}`);
      }
    }
  };

  const selectedTip = tipId ? content.find(tip => tip.id === tipId) : null;

  if ((tagId && !tags[tagId]) || (tipId && !selectedTip)) {
    window.location = "/404";
    return;
  }

  return (
    <Fragment>
      <Section width="56rem" center>
        <Spacer size="xxxl" />
        { <Logo /> }
        <Spacer />
        <H2 align="center">DevRel KPIs</H2>
        <H3 align="center" style={{ maxWidth: "48rem" }}>
          <Highlight>Metrics and methods for proving ROI </Highlight> through data + story. Advice from around the
          DevRel and Community world.
        </H3>
        <Grid width="22em">
          <StyledA
            href="https://github.com/orbit-love/devrel-kpis"
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
            label={tags[tagId].name}
            options={tagsValues}
            optionsNames={tagNames}
            onSelect={handleSelectTag}
          />
        </Grid>
        <Spacer />
        <P2>
          Made by{" "}
          <a href="https://orbit.love" target="_blank" rel="noopener noreferrer">
            the team at Orbit
          </a>
          .
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
            const show = tagId === tag || tagId === "all";

            return (
              <ContentCard
                isCurrentCard={false}
                key={key}
                show={show}
                element={tip}
                onTagClick={() => handleSelectTag(tag === tagId ? "all" : tag)}
                onLinkClick={() => handleSelectTip(tip)}
              />
            );
          })}
        </Columns>
        <Spacer size="xxxl" />
        <P2 align="center">
          Made by{" "}
          <a href="https://twitter.com/OrbitModel" target="_blank" rel="noopener noreferrer">
            Orbit
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
        <P2 align="center">
          Inspired by and forked from{" "}
          <a href="https://inboxze.ro/" target="_blank" rel="noopener noreferrer">
            Inbox Zero
          </a>
          .
        </P2>
        <P2 align="center">
          Privacy Policy <Link to="/privacy-policy">here</Link>.
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
                id={selectedTip.id}
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

export default IndexPage;
