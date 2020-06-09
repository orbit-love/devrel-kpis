/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useConfig, useDarkMode } from "superlinear-react-ui";

const Highlight = props => {
  const { children } = props;

  const config = useConfig();
  const [darkMode] = useDarkMode();

  const BackgroundSVG = () => (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMin slice"
      viewBox="0 0 259 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.52046 7.61271C3.85716 5.01687 5.99856 3.02067 8.61129 2.8613C89.889 -2.09625 153.583 1.41296 249.786 3.06294C252.543 3.11023 254.862 5.19918 255.163 7.94007L258.042 34.1291C258.394 37.3277 255.904 40.1386 252.686 40.1964C163.97 41.789 103.594 40.5589 5.70995 37.7552C2.47204 37.6625 -0.00486298 34.7922 0.411793 31.5798L3.52046 7.61271Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-0.366447"
          y1="-21.2529"
          x2="378.539"
          y2="252.851"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={darkMode ? "#121601" : "#EDE9FE"} />
          <stop offset="1" stopColor={darkMode ? "#404e04" : "#BFB1FB"} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  const spanCSS = css`
    position: relative;
    svg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: -1;
    }
    :nth-of-type(odd) {
      svg {
        transform: rotate(180deg);
      }
    }
  `;

  return (
    <span css={spanCSS}>
      {children}
      <BackgroundSVG />
    </span>
  );
};

export default Highlight;
