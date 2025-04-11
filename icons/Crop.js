import * as React from "react";
const SvgCrop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#crop_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5 .75V0H3.5v3.5H0V5h3.5v6.5a1 1 0 0 0 1 1H11V16h1.5v-3.5H16V11h-3.5V4.5a1 1 0 0 0-1-1H5zM5 5v6h6V5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="crop_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrop;
