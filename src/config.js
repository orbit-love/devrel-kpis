const baseConfig = {
  colors: {
    c1: "hsla(200, 30%, 20%, 1)", // Input, H1, H2
    c2: "hsla(200, 25%, 30%, 1)",
    c3: "hsla(200, 20%, 40%, 1)",
    c4: "hsla(200, 15%, 60%, 1)",
    c5: "hsla(200, 10%, 75%, 1)",
    c6: "hsla(200, 5%, 92%, 1)",
    bg0: "white",
    bg1: "hsl(39, 81%, 96%)",
    bg2: "hsl(39, 78%, 95%)",
    bg3: "hsl(39, 76%, 94%)",
    bg4: "hsl(39, 72%, 93%)",
    accent1: "#7E62EE",
    error: "hsl(360, 90%, 60%)",
    success: "hsl(130, 70%, 45%)",
    uiBorderColor: "hsla(200, 10%, 87%, 1)",
    shadowColor: "hsla(200, 60%, 20%, .05)"
  },
  fonts: {
    faces: {
      normal:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
      // You can add h1, h2, p1, p2 etc.
    },
    weights: {
      normal: 400,
      H1: 700,
      H2: 700,
      H3: 600,
      H4: 600,
      H5: 500,
      Label: 400,
      Button: 500,
      Input: 400,
      smallHeading: 600
    },
    margins: {
      normal: "0.4rem 0 1rem 0",
      H1: "0.4rem 0 .2rem 0",
      H2: "0.3rem 0 .3rem 0",
      H3: "0.2rem 0 .6rem 0",
      H4: "0.2rem 0 1rem 0",
      H5: "0.2rem 0 1rem 0",
      SmallText: ".3rem 0 0.4rem 0",
      smallHeading: ".4rem 0 0.4rem 0",
      Badge: "0"
    },
    sizes: {
      normal: ["1em", "16px"],
      P2: ["0.9em", "16px"],
      H1: ["3em", "2em"],
      H2: ["1.8", "1.6em"],
      H3: "1.5em",
      H4: "1.2em",
      H5: "1.1em",
      Badge: ["0.9em", "16px"],
      SmallText: ["0.8em", "16px"],
      smallHeading: ["1em", "16px"],
      Button: ["1.2em", "16px"],
      Input: ["1em", "16px"]
    },
    lineHeights: {
      normal: 1.5,
      H1: 1.3,
      H2: 1.2,
      H3: 1.2,
      H4: 1.2,
      H5: 1.2,
      Badge: 1.3
    },
    colors: {
      normal: c => c.colors.c2,
      H1: c => c.colors.c1,
      H2: c => c.colors.c1,
      H3: c => c.colors.c2,
      H4: c => c.colors.c3,
      H5: c => c.colors.c3,
      P1: c => c.colors.c3,
      P2: c => c.colors.c4,
      SmallText: c => c.colors.c4,
      smallHeading: c => c.colors.c3
    }
  },
  appearance: {
    bigRadius: "2em",
    smallRadius: "0.8em"
  },
  buttons: {
    // General and Buttons,
    height: "3em",
    shadowSize: `0px 4px 4px`,
    padding: "0 1.2em",
    hoverLighten: 0,
    activeLighten: 0,
    whiteButtonsEffect: c => `border: 1px solid ${c.colors.c6};`
  }
};

const darkConfig = {};

export { baseConfig, darkConfig };
