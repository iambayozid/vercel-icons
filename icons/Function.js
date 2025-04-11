import * as React from "react";
const SvgFunction = (props) => (
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
      d="M8.75 4a2.5 2.5 0 0 1 2.5-2.5H12V0h-.75a4 4 0 0 0-4 4v2H4v1.5h3.25V12a2.5 2.5 0 0 1-2.5 2.5H4V16h.75a4 4 0 0 0 4-4V7.5H12V6H8.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFunction;
