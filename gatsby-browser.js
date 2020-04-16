/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // don't scroll when navigating
  return false;
};
