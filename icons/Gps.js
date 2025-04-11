import * as React from "react";
const SvgGps = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#gps_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m1 6 14-5-5 14-2.34-6.085a1 1 0 0 0-.575-.575z"
      />
    </g>
    <defs>
      <clipPath id="gps_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGps;
