import * as React from "react";
const SvgStopwatch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#stopwatch_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.25 1.25v.79a6.97 6.97 0 0 0-3.641 1.508L3.03 2.97l-.53-.53L1.44 3.5l.53.53.578.579a7 7 0 1 0 10.904 0l.578-.579.53-.53-1.06-1.06-.53.53-.579.578A6.97 6.97 0 0 0 8.75 2.04v-.79H10v-1.5H6v1.5zM2.5 9a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6.25-2.25V6h-1.5v3.75h1.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="stopwatch_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStopwatch;
