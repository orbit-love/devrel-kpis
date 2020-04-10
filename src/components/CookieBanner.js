import React, { useState, useEffect } from "react";

const CookieBanner = props => {
  const [cookieDismissed, setCookieDismissed] = useState(false);

  // if (cookieDismissed) return null;

  useEffect(() => {
    if (localStorage.getItem("cookieDismissed")) {
      setCookieDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (cookieDismissed) {
      localStorage.setItem("cookieDismissed", true);
    }
  }, [cookieDismissed]);

  // TODO: use UI Kit notification here

  return <></>;

  // return (
  //   <BannerWrapper show={!cookieDismissed}>
  //     <div>
  //       <P1>
  //         {cookieDismissed} Using this website you adhere to our{" "}
  //         <a href="https://www.iubenda.com/privacy-policy/15260586" target="_blank">
  //           Privacy Policy
  //         </a>{" "}
  //         and{" "}
  //         <a href="https://www.iubenda.com/privacy-policy/15260586/cookie-policy" target="_blank">
  //           Cookie Policy
  //         </a>
  //         .
  //       </P1>
  //       <Close
  //         onClick={() => {
  //           setCookieDismissed(true);
  //         }}
  //       />
  //     </div>
  //   </BannerWrapper>
  // );
};

export default CookieBanner;
