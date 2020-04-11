import React from "react";
import Page from "../components/Page";
import { useConfig, Section, H1, H3, P1, Button, Grid } from "superlinear-react-ui";
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
    <Section center>
      <H1>inboxze.ro</H1>
      <H3 align="center">
        We’ve asked our friends to tell us how they get to inbox zero, and we’ve collected exclusive discounts to the
        best email apps and services out there.
      </H3>
      <Grid>
        <Button style={{ background: "linear-gradient(180deg, #7E62EE 0%, #522DE3 100%)" }}>Get started</Button>
        <Button color="white">Submit your tip</Button>
      </Grid>
    </Section>
  );
};

export default IndexPage;
