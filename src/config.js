const baseConfig = {
  colors: {
    c1: "hsl(249, 9%, 15%)",
    c2: "hsl(249, 9%, 18%)",
    c3: "hsl(249, 9%, 22%)",
    c4: "hsl(249, 9%, 60%)",
    c5: "hsl(249, 9%, 75%)",
    c6: "hsl(249, 9%, 92%)",
    bg0: "white",
    bg1: "hsl(0, 0%, 98%)",
    bg2: "hsl(0, 0%, 96%)",
    bg3: "hsl(0, 0%, 94%)",
    bg4: "hsl(0, 0%, 93%)",
    accent1: "hsl(249, 9%, 15%)",
    error: "hsl(360, 90%, 60%)",
    success: "hsl(130, 70%, 45%)",
    uiBorderColor: "hsla(0, 0%, 0%, 0.14)",
    shadowColor: "hsla(0, 0%, 0%, .05)"
  },
  fonts: {
    faces: {
      normal:
        "niveau-grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    weights: {
      normal: 400,
      H1: 700,
      H2: 500,
      H3: 600,
      H4: 500,
      H5: 500,
      Label: 400,
      Button: 400,
      Input: 400,
      smallHeading: 600
    },
    margins: {
      normal: "0",
      H1: "0",
      H2: "0",
      H3: "0",
      H4: "0",
      H5: "0",
      SmallText: "0",
      smallHeading: "0"
    },
    sizes: {
      normal: ["1em", "16px"],
      P1: ["18px", "18px"],
      P2: ["16px", "14px"],
      H1: ["3em", "2em"],
      H2: ["2.4em", "1.8em"],
      H3: "1.5em",
      H4: "20px",
      H5: "1.1em",
      Badge: ["0.9em", "16px"],
      SmallText: ["0.8em", "16px"],
      smallHeading: ["1em", "16px"],
      Button: ["17px", "16px"],
      Input: ["1em", "16px"]
    },
    lineHeights: {
      normal: 1.5,
      H1: 1.3,
      H2: 1.4,
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
    bigRadius: "12px",
    smallRadius: "6px"
  },
  layout: {
    layoutWidth: "100%",
    layoutPadding: ["2.5rem", "1rem"],
    gridGap: "0.8em",
    stackGap: "0.1em"
  },
  section: {
    padding: ["2.5rem", "1.5rem"]
  },
  buttons: {
    // General and Buttons,
    height: "42px",
    shadowSize: `0px 3px 3px`,
    padding: "0 1.5em",
    hoverLighten: 0,
    activeLighten: 0,
    whiteButtonsEffect: c => `border: 1px solid ${c.colors.uiBorderColor};`
  },
  card: {
    smallPadding: "6em"
  },
  header: {
    background: "transparent",
    border: "none",
    height: "3.5em",
    breakPoint: "0px"
  },
  dropdown: {
    anchor: "BOTTOM_LEFT",
    lateralPadding: "1em",
    rowSize: c => c.sizes.m
  }
};

const darkConfig = {};

export { baseConfig, darkConfig };
