/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { P1, H4, Modal, useConfig } from "superlinear-react-ui";
import ReactMarkdown from "react-markdown";

const PrivacyPolicy = props => {
  const { show, setShow } = props;
  const config = useConfig();

  const policy = `
## Privacy Policy

This document can be printed for reference by using the print command in the settings of any browser.

## Owner and Data Controller  
Superlinear Srl  
Via Paolo da Cannobio, 9  
20122 Milano (MI), Italy  
VAT ID: IT10540450961  

Owner contact email: [hello@superlinear.co](mailto:hello@superlinear.co)

## Types of Data collected

Among the types of Personal Data that [inboxze.ro](https://inboxze.ro) collects, by itself or through third parties, there are: Cookies; Usage Data; Data communicated while using the service.

The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Analytics.

For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.

### Detailed information on the processing of Personal Data

Personal Data is collected for the following purposes and using the following services:

#### Google Analytics (Google Ireland Limited)
Google Analytics is a web analysis service provided by Google Ireland Limited (“Google”). Google utilizes the Data collected to track and examine the use of www.boxysuite.com, to prepare reports on its activities and share them with other Google services.
Google may use the Data collected to contextualize and personalize the ads of its own advertising network.

Personal Data collected: Cookies; Usage Data.

Place of processing: Ireland – [Privacy Policy](https://policies.google.com/privacy) – [Opt Out](https://tools.google.com/dlpage/gaoptout?hl=en). Privacy Shield participant.
  `;

  return (
    <Modal show={show} setShow={setShow} width="50em">
      <div
        css={css`
          h2,
          h3,
          h4,
          h5 {
            margin: 0.1em 0 0.2em;
            color: ${config.colors.c1};
          }
          p {
            margin: 0 0 0.5em;
            color: ${config.colors.c2};
          }
        `}
      >
        <ReactMarkdown source={policy} />
      </div>
    </Modal>
  );
};

export default PrivacyPolicy;
