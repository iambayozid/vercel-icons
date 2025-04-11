import * as React from "react";
const SvgFooter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#footer_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 2.5h13v7.255h-13zm0 8.505V12.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1.495zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="footer_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFooter;
