import React from "react";
import Page from "../components/Page";
import { useConfig, Section, H1, P1 } from "superlinear-react-ui";
import Helmet from "react-helmet";

const IndexPage = () => {
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
  return (
    <Section>
      <H1>Welcome</H1>
      <P1>This is an awesome website.</P1>
    </Section>
  );
};

export default IndexPage;
