import * as React from "react";
const SvgGitMerge = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#000" d="M4 6.25v8z" />
    <path
      stroke="#fff"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6.25v8"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-1.421.687a3.001 3.001 0 1 0 .036-1.512 5.25 5.25 0 0 1-4.29-4.29 3 3 0 1 0-3.808-3.23A3 3 0 0 0 3.313 6.92a6.75 6.75 0 0 0 5.766 5.766M2.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGitMerge;
