import * as React from "react";
const SvgSidebarLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#sidebar-left_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.245 2.5H14.5v10a1 1 0 0 1-1 1H6.245zm-1.25 0H1.5v10a1 1 0 0 0 1 1h2.495zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="sidebar-left_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSidebarLeft;
