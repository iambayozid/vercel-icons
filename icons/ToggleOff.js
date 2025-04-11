import * as React from "react";
const SvgToggleOff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#toggle-off_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.57 4.5H11a3.5 3.5 0 1 1 0 7H8.57A4.98 4.98 0 0 0 10 8a4.98 4.98 0 0 0-1.43-3.5M5 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M0 8a5 5 0 0 1 5-5h6a5 5 0 1 1 0 10H5a5 5 0 0 1-5-5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="toggle-off_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToggleOff;
