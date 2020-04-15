/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, Fragment, useEffect } from "react";
import Page from "../components/Page";
import {
  Section,
  H2,
  P1,
  P2,
  H4,
  Icon,
  HStack,
  VStack,
  Card,
  Spacer,
  DropDownMenu,
  SubtleCard,
  useWindow,
  Grid
} from "superlinear-react-ui";
import Helmet from "react-helmet";
import { content, tags } from "../../content";
import StyledA from "../components/StyledA";
import Highlight from "../components/Highlight";
import { useQueryParam } from "../hooks/useQueryParam";
import { motion, AnimatePresence } from "framer-motion";

const IndexPage = () => {
  return (
    <Page title="inboxze.ro">
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

  return (
    <Fragment key={render}>
      <Section width="66rem" center>
        <Spacer size="xxxl" />
        <Logo />
        <Spacer />
        <H2 align="center">
          A crowd-sourced collection of the <Highlight>best email tips</Highlight>, <Highlight>workflows</Highlight> &{" "}
          <Highlight>offers</Highlight> to dominate your&nbsp;inbox.
        </H2>
        <Spacer size="xxl" />
        <Grid>
          <StyledA href="#" icon="github" type="primary">
            Contribute
          </StyledA>
          <DropDownMenu
            fullWidth
            innerIcon="chevronDown"
            label={currentTagName}
            options={tagsValues}
            optionsNames={tagNames}
            onSelect={(value, i) => {
              setCurrentTag(value);
              updatedUrlTag(value, window);
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
          <a href="https://twitter.com/frankdilot" target="_blank" rel="noopener noreferrer">
            Francesco
          </a>{" "}
          for updates
        </P2>
      </Section>
      <Section>
        <AnimatePresence>
          <div
            css={css`
              columns: 3;
              column-gap: 0;

              @media (max-width: 1300px) {
                columns: 2;
              }

              @media (max-width: 800px) {
                columns: 1;
              }
              > div {
                padding: 10px;
                -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
                page-break-inside: avoid; /* Firefox */
                break-inside: avoid; /* IE 10+ */
                @media (max-width: 800px) {
                  padding: 0 0 20px;
                }
              }
            `}
          >
            {content.map((el, index) => {
              const { tag, author, body, source_url, offer, chrome_extension } = el;

              const show = currentTag === tag || currentTag === "all";

              const key = `${tag}${author.name}${index}${show}`;

              return (
                <AnimateSharedLayout show={show} key={key} id={key}>
                  <Card inline width>
                    <Tag tag={tag} />
                    {author && (
                      <HStack gap="4px">
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
                          <P2>{author.bio}</P2>
                        </VStack>
                      </HStack>
                    )}
                    {body && <P1 style={{ marginTop: "1em", whiteSpace: "pre-line" }}>{body}</P1>}
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
                  </Card>
                </AnimateSharedLayout>
              );
            })}
          </div>
        </AnimatePresence>
      </Section>
    </Fragment>
  );
};

const Tag = ({ tag }) => {
  if (!tag) return null;

  const thisTag = tags[tag];

  return (
    <span
      css={css`
        display: inline-block;
        background: ${thisTag.color}22;
        padding: 1px 6px;
        border-radius: 5px;
        position: absolute;
        top: 8px;
        right: 8px;
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

export const AnimateSharedLayout = ({ show, id, children }) =>
  show && (
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
  <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <circle cx="53" cy="53" r="53" fill="#25242B" />
      <path
        opacity="0.1"
        d="M23.941 97.3235C29.7616 101.14 36.2769 103.772 43.1148 105.07C49.9528 106.368 56.9794 106.307 63.7936 104.889C70.6078 103.472 77.0761 100.726 82.8292 96.8089C88.5822 92.8916 93.5074 87.8796 97.3235 82.059C101.14 76.2383 103.772 69.723 105.07 62.8851C106.368 56.0472 106.307 49.0205 104.889 42.2063C103.472 35.3921 100.726 28.9238 96.8088 23.1708C92.8916 17.4177 87.8796 12.4925 82.0589 8.67645L52.9999 53L23.941 97.3235Z"
        fill="white"
      />
      <rect x="44.75" y="37.75" width="16.5" height="30.5" rx="8.25" stroke="white" stroke-width="3.5" />
      <path d="M45.5 64L59.9999 42" stroke="white" stroke-width="3.5" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H106V106H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function updatedUrlTag(tag, window) {
  if (window.history.pushState) {
    const newUrl =
      tag === "all"
        ? window.location.protocol + "//" + window.location.host + window.location.pathname
        : window.location.protocol + "//" + window.location.host + window.location.pathname + `?tag=${tag}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
}

export default IndexPage;
