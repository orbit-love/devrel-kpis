import React from "react";
import Page from "../components/Page";
import { useConfig, Section, H1, P1 } from "superlinear-react-ui";

const IndexPage = () => {
  return (
    <Page title="Home">
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
