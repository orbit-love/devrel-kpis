/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, Fragment } from "react";
import Page from "../components/Page";
import {
  useConfig,
  Section,
  H2,
  P1,
  P2,
  H4,
  HStack,
  VStack,
  Card,
  Spacer,
  DropDownMenu,
  Grid
} from "superlinear-react-ui";
import Helmet from "react-helmet";
import content from "../../content";
import StyledA from "../components/StyledA";
import Highlight from "../components/Highlight";

const IndexPage = () => {
  console.log(content);

  return (
    <Page title="Home">
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

  const tags = ["all", "tips", "apps"];
  const tagNames = ["Show All", "Tips", "Apps"];
  const [currentTag, setCurrentTag] = useState(0);

  return (
    <Fragment>
      <Section center>
        <Logo />
        <Spacer />
        <H2 align="center">
          A crowd-sourced collection of the <Highlight>best email tips</Highlight>, <Highlight>workflows</Highlight> &{" "}
          <Highlight>offers</Highlight> to dominate your inbox.
        </H2>
        <Spacer />
        <P2>
          <a href="#!">Notify me</a> where there are new tips & discounts
        </P2>
        <Spacer />
        <Grid>
          <StyledA href="#" icon="github" type="primary">
            Contribute
          </StyledA>
          <DropDownMenu
            innerIcon="chevronDown"
            label={tagNames[currentTag]}
            options={tags}
            optionsNames={tagNames}
            onSelect={(s, i) => {
              setCurrentTag(i);
            }}
          />
        </Grid>
      </Section>
      <Section>
        <div
          css={css`
            columns: 2;
            > div {
              padding: 10px;
              -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
              page-break-inside: avoid; /* Firefox */
              break-inside: avoid; /* IE 10+ */
            }
          `}
        >
          {content.map(el => {
            const { tag, author, body, source_url, chrome_extension } = el;
            return (
              <div>
                <Card inline width>
                  {author && (
                    <HStack gap="4px">
                      <img
                        src={`https://unavatar.now.sh/${author.unavatar}`}
                        alt={author.name}
                        css={css`
                          width: 46px;
                          height: 46px;
                          border-radius: 50%;
                        `}
                      />
                      <VStack gap={0}>
                        <H4>{author.name}</H4>
                        <P2>{author.bio}</P2>
                      </VStack>
                    </HStack>
                  )}
                  <Spacer size="xs" />
                  {body && <P1 style={{ whiteSpace: "pre-line" }}>{body}</P1>}
                </Card>
              </div>
            );
          })}
        </div>
      </Section>
    </Fragment>
  );
};

const Logo = () => (
  <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="53" cy="53" r="53" fill="#25242B" />
    <path
      d="M41.4485 44.0779C43.2454 44.0779 44.6389 42.5744 44.6389 40.9975C44.6389 39.4206 43.2454 37.9538 41.4485 37.9538C39.6515 37.9538 38.258 39.4206 38.258 40.9975C38.258 42.5744 39.6515 44.0779 41.4485 44.0779ZM36.5345 63.8806H46.3991V61.7537H44.4555V45.6548H42.952L36.1677 47.7451V49.212L38.6614 50.2754V61.7537H36.5345V63.8806ZM46.7988 68.7213H48.5224L59.8906 37.0003H58.167L46.7988 68.7213ZM57.5863 63.8806H73.6851L74.1252 56.7663H72.8417L69.8346 61.9737L63.7838 62.4504L74.0885 47.5984V46.0215H59.1265L58.6864 52.4024H59.8599L62.647 47.9284L67.891 47.4884L57.5863 62.2304V63.8806Z"
      fill="white"
    />
  </svg>
);

export default IndexPage;
