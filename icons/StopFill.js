import * as React from "react";
const SvgStopFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#stop-fill_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.393.293A1 1 0 0 1 5.101 0h5.798a1 1 0 0 1 .708.293l4.1 4.1a1 1 0 0 1 .293.708v5.798a1 1 0 0 1-.293.708l-4.1 4.1A1 1 0 0 1 10.9 16H5.1a1 1 0 0 1-.707-.293l-4.1-4.1A1 1 0 0 1 0 10.9V5.1a1 1 0 0 1 .293-.707zM8.75 3.75v5h-1.5v-5zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="stop-fill_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStopFill;
