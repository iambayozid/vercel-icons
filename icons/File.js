import * as React from "react";
const SvgFile = (props) => (
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
      d="M14.5 6.5v7A2.5 2.5 0 0 1 12 16H4a2.5 2.5 0 0 1-2.5-2.5V0h7.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707zm-1.5 0v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12h5v5zM9.5 2.121V5h2.879z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
