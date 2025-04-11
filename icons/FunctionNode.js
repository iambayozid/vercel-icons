import * as React from "react";
const SvgFunctionNode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#function-node_svg__a)">
      <path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.25 8V2.25a1.5 1.5 0 0 0-1.5-1.5H2.25a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5H8"
      />
      <path
        fill="#000"
        d="M9.246 4.25A2.246 2.246 0 0 0 7 6.496v3.008a2.246 2.246 0 0 1-2.246 2.246m.496-4h3.5z"
      />
      <path
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.246 4.25A2.246 2.246 0 0 0 7 6.496v3.008a2.246 2.246 0 0 1-2.246 2.246m.496-4h3.5"
      />
      <path fill="#46A758" d="m13 9 3 1.75v3.5L13 16l-3-1.75v-3.5z" />
    </g>
    <defs>
      <clipPath id="function-node_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFunctionNode;
