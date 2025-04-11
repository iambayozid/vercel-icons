import * as React from "react";
const SvgCamera = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#camera_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 3.5h2L5 1h6l1.5 2.5H16v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5v-9zm3.286.772L5.85 2.5h4.302l1.063 1.772.437.728H14.5v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V5h2.85zM9.75 8.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m1.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="camera_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCamera;
