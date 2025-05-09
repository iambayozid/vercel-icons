import * as React from "react";
const SvgFilter = (props) => (
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
      d="M1 0h14v3.31l-.22.22-4.28 4.28V16H8.782l-.185-.117-2.75-1.75-.347-.221V7.81L1.22 3.53 1 3.31zm1.5 1.5v1.19l4.28 4.28.22.22v5.898l2 1.273V7.19l.22-.22 4.28-4.28V1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilter;
