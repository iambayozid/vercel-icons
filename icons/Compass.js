import * as React from "react";
const SvgCompass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#compass_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M15.733 1.16 15.98.02l-1.14.247-9.616 2.09a3.75 3.75 0 0 0-2.868 2.868l-2.09 9.616-.248 1.14 1.14-.248 9.616-2.09a3.75 3.75 0 0 0 2.868-2.868l2.09-9.616zM5.543 3.822l8.476-1.842-1.842 8.475a2.25 2.25 0 0 1-1.72 1.72L1.98 14.02l1.842-8.475a2.25 2.25 0 0 1 1.72-1.72zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="compass_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCompass;
