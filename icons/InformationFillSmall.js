import * as React from "react";
const SvgInformationFillSmall = (props) => (
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
      fillOpacity={0.1}
      d="M14 8A6 6 0 1 1 1.999 8 6 6 0 0 1 14 8"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 7h-.75v1.5h1v2.75h1.5V8a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInformationFillSmall;
