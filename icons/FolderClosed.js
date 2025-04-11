import * as React from "react";
const SvgFolderClosed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#folder-closed_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-5zm0-1.5V4H8.833a2.5 2.5 0 0 1-1.5-.5L6 2.5H1.5V6zM0 1h6.167a1 1 0 0 1 .6.2l1.466 1.1a1 1 0 0 0 .6.2H16v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="folder-closed_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolderClosed;
