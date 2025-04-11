import * as React from "react";
const SvgClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#clock_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8M8.75 4.75V4h-1.5v3.875a1 1 0 0 0 .4.8l1.9 1.425.6.45.9-1.2-.6-.45-1.7-1.275z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clock_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClock;
