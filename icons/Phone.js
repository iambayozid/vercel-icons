import * as React from "react";
const SvgPhone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#phone_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 1H2.878a2 2 0 0 0-1.97 2.343l.24 1.385a12 12 0 0 0 9.023 9.613l2.362.567A2 2 0 0 0 15 12.963V10.5l-3.25-2.25-2.5 2.5-4-4 2.5-2.5z"
      />
    </g>
    <defs>
      <clipPath id="phone_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhone;
