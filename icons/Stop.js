import * as React from "react";
const SvgStop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#stop_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.308 1.5 1.5 5.308v5.384L5.308 14.5h5.384l3.808-3.808V5.308L10.692 1.5zM5.1 0a1 1 0 0 0-.708.293l-4.1 4.1A1 1 0 0 0 0 5.101v5.798a1 1 0 0 0 .293.708l4.1 4.1a1 1 0 0 0 .708.293h5.798a1 1 0 0 0 .708-.293l4.1-4.1A1 1 0 0 0 16 10.9V5.1a1 1 0 0 0-.293-.707l-4.1-4.1A1 1 0 0 0 10.9 0zm3.65 3.75v5h-1.5v-5zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="stop_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStop;
