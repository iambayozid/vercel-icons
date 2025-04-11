import * as React from "react";
const SvgMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.75 4H1v1.5h14V4zm0 6.5H1V12h14v-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenu;
