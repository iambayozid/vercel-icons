import * as React from "react";
const SvgToolbar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#toolbar_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm9.634 9.5H5.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM10.5 8h-5a2 2 0 1 0 0 4h5a2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="toolbar_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToolbar;
