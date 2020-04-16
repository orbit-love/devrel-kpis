/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { motion } from "framer-motion";
import { Card, Grid, H4, HStack, Icon, P1, P2, SubtleCard, useConfig, VStack } from "superlinear-react-ui";
import { tags } from "../../content";
import StyledA from "./StyledA";
import ReactMarkdown from "react-markdown";

const ContentCard = ({ show, isCurrentCard, element, onLinkClick, onTagClick, style }) => {
  const config = useConfig();

  const { tag, author, body, url, label, preview_image, source_url, offer, chrome_extension } = element;

  if (!show) return null;

  return (
    <AnimatedDiv id={element.id} style={style}>
      <Card inline width style={{ marginBottom: "20px" }}>
        <HStack align="right" vAlign="center" style={{ position: "absolute", top: "9px", right: "9px" }} gap="4px">
          <Icon
            onClick={onLinkClick}
            name={isCurrentCard ? "closeBold" : "link"}
            color={config.colors.c4}
            size={isCurrentCard ? "24px" : "16px"}
          />
        </HStack>
        {author && (
          <HStack gap="4px" noWrap onClick={onLinkClick} style={{ cursor: "pointer" }}>
            {author.avatar && (
              <img
                src={`https://unavatar.now.sh/${author.avatar}`}
                alt={author.name}
                css={css`
                  width: 46px;
                  height: 46px;
                  border-radius: 50%;
                `}
              />
            )}
            {!author.avatar && author.image && (
              <img
                src={author.image}
                alt={author.name}
                css={css`
                  width: 46px;
                  height: 46px;
                `}
              />
            )}
            <VStack gap={0}>
              <H4>{author.name}</H4>
              <P2 noWrap>{author.bio}</P2>
            </VStack>
          </HStack>
        )}
        {body && (
          <div
            css={css`
              margin-top: 1em;
              white-space: pre-line;
              color: ${config.colors.c2};
              font-size: 17px;
              @media (max-width: 640px) {
                font-size: 16px;
              }
              em {
                font-style: normal;
                background: linear-gradient(-15deg, hsla(50, 100%, 85%, 0.6) 0%, hsla(45, 100%, 85%, 1) 100%);
                padding: 3px 4px;
                margin: -3px -4px;
              }
              p {
                margin: 0 0 0.8em;
                :last-of-type {
                  margin-bottom: 0;
                }
              }
              ul {
                padding-left: 18px;
                li {
                  margin-bottom: 6px;
                }
              }
            `}
          >
            <ReactMarkdown source={body} />
          </div>
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
              objectPosition: "top",
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
          <StyledA style={{ marginTop: "1em" }} type="primary" href={url} target="_blank" rel="noopener noreferrer">
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
        <HStack align="right" vAlign="center" gap="4px" style={{ marginTop: "1em" }}>
          {source_url && <Source href={source_url} />}
          <Tag tag={tag} onClick={onTagClick} />
        </HStack>
      </Card>
    </AnimatedDiv>
  );
};

const AnimatedDiv = ({ id, children, style }) => (
  <motion.div initial={false} layoutId={id} style={{ zIndex: 2, ...style }}>
    {children}
  </motion.div>
);

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
          font-size: 13px;
          font-weight: 500;
        }
      `}
    >
      <P2 color={thisTag.color}>{thisTag.name}</P2>
    </span>
  );
};

const Source = ({ href }) => {
  return (
    <a
      href={href}
      css={css`
        display: inline-block;
        border: 1px solid hsl(0, 0%, 80%);
        box-sizing: border-box;
        padding: 0px 6px;
        border-radius: 5px;
        cursor: pointer;
        p {
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 500;
        }
      `}
      target="_blank"
      rel="noopener noreferrer"
    >
      <P2 color="hsl(0, 0%, 60%)">Source</P2>
    </a>
  );
};

export default ContentCard;
