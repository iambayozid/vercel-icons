import * as React from "react";
const SvgFolderMinus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#folder-minus_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.5 4v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-10H6l1.333 1c.433.325.96.5 1.5.5zM0 1h6.167a1 1 0 0 1 .6.2l1.466 1.1a1 1 0 0 0 .6.2H16v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm5.75 7H5v1.5h6V8z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="folder-minus_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolderMinus;
