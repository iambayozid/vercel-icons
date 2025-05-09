import * as React from "react";
const SvgBox = (props) => (
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
      d="m8 .155.346.18 6.25 3.25.404.21v8.41l-.404.21-6.25 3.25-.346.18-.346-.18-6.25-3.25-.404-.21v-8.41l.404-.21 6.25-3.25zm-5.5 11.14V5.44l4.75 2.375v5.949zm6.25 2.47 4.75-2.47V5.44L8.75 7.816zM8 1.845l4.577 2.38L8 6.514 3.423 4.225z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBox;
