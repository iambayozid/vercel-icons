import * as React from "react";
const SvgPrismColor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#000" d="m9 7 3.5-4.5z" />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 7 3.5-4.5"
    />
    <path fill="#000" d="m10.5 9.5 5.25 1z" />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.5 9.5 5.25 1"
    />
    <path fill="#000" d="m10 8 5.75-2z" />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 8 5.75-2"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.146 3.566 7 2l.854 1.566 4.328 7.934L13 13H1l.818-1.5 1.5-2.75H0v-1.5h4.136zM3.526 11.5 7 5.132l3.473 6.368z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrismColor;
