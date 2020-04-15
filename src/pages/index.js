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
          <a href="https://twitter.com/frankdilo" target="_blank" rel="noopener noreferrer">
            Francesco
          </a>{" "}
          for updates
        </P2>
      </Section>
      <Section>
        <AnimatePresence>
          <div
            css={css`
              > div {
                padding: 10px;
                width: calc(50% - 20px);
                :nth-child(odd) {
                  float: left;
                }
                :nth-child(even) {
                  float: right;
                }
                @media (max-width: 800px) {
                  width: 100%;
                  float: none;
                  padding: 0 0 15px;
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
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <circle cx="48" cy="48" r="48" fill="#25242B" />
      <path
        opacity="0.06"
        d="M21.6824 88.1421C26.9539 91.5981 32.8546 93.9821 39.0474 95.1577C45.2403 96.3334 51.604 96.2778 57.7754 94.994C63.9467 93.7103 69.8048 91.2236 75.0151 87.6759C80.2254 84.1283 84.686 79.5891 88.142 74.3175C91.5981 69.046 93.982 63.1454 95.1577 56.9525C96.3334 50.7597 96.2777 44.3959 94.994 38.2246C93.7103 32.0532 91.2236 26.1952 87.6759 20.9848C84.1282 15.7745 79.5891 11.314 74.3175 7.85791L48 48L21.6824 88.1421Z"
        fill="white"
      />
      <rect
        x="40.5283"
        y="34.1887"
        width="14.9434"
        height="27.6226"
        rx="7.4717"
        stroke="white"
        stroke-width="3.16981"
      />
      <path d="M41.2075 57.9623L54.3395 38.0377" stroke="white" stroke-width="3.16981" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0H96V96H0V0Z" fill="white" />
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
