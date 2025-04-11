import * as React from "react";
const SvgShieldGlobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#shield-globe_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25 4.25V3.5C9.35 2.867 6 2.59 6 0 6 2.59 2.65 2.867.75 3.5v6.027a4.5 4.5 0 0 0 2.412 3.986l1.338.701"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M11.5 15.4a3.9 3.9 0 1 0 0-7.8 3.9 3.9 0 0 0 0 7.8"
      />
      <path
        fill="#000"
        d="M8 11.5h7.25zm2.75 3.5a12.74 12.74 0 0 1 0-7zm1.5 0a12.74 12.74 0 0 0 0-7z"
      />
      <path
        stroke="#fff"
        strokeLinejoin="bevel"
        d="M8 11.5h7.25m-4.5 3.5a12.74 12.74 0 0 1 0-7m1.5 7a12.74 12.74 0 0 0 0-7"
      />
    </g>
    <defs>
      <clipPath id="shield-globe_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldGlobe;
