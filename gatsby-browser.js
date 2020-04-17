/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location === "/404" || location === "/privacy-policy") {
    return true;
  }

  // Don't scroll when navigating in home page (client-side routing there)
  return false;
};
