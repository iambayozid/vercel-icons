import * as React from "react";
const SvgPlus = (props) => (
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
      d="M8.75 1.75V1h-1.5v5.75H1.5v1.5h5.75V14h1.5V8.25h5.75v-1.5H8.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlus;
