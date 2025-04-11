import * as React from "react";
const SvgClipboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#clipboard_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.75 1.5h2.5a.5.5 0 1 1 0 1h-2.5a.5.5 0 1 1 0-1m-1.937 0A2 2 0 0 1 6.75 0h2.5a2 2 0 0 1 1.937 1.5H14v11.25A3.25 3.25 0 0 1 10.75 16h-5.5A3.25 3.25 0 0 1 2 12.75V1.5zM5.018 3H3.5v9.75c0 .966.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75V3h-1.518A2 2 0 0 1 9.25 4h-2.5a2 2 0 0 1-1.732-1"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clipboard_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClipboard;
