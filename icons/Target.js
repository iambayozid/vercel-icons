import * as React from "react";
const SvgTarget = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#target_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8-.001 8 8 0 0 0 8 16m0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="target_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTarget;
