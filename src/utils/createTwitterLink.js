function createTwitterLink(copy, url) {
  const finalUrl = new URL(url);
  const tweetBase = "https://twitter.com/intent/tweet?text=";
  return encodeURI(`${tweetBase}${copy} ${finalUrl.href}`);
}

export default createTwitterLink;
