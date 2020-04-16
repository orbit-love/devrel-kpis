import { Link } from "gatsby";
import React from "react";
import { H2, Section } from "superlinear-react-ui";
import Page from "../components/Page";

const NotFoundPage = () => (
  <Page title="Not found">
    <Section width="56rem" center>
      <H2>Ops, not found.</H2>
      <Link to="/">Go home.</Link>
    </Section>
  </Page>
);

export default NotFoundPage;
