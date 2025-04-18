import * as React from "react";
const SvgArrowCircleDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#arrow-circle-down_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.75 5.25V4.5h-1.5v4.94L5.78 7.97l-.53-.53L4.19 8.5l.53.53 2.75 2.75a.75.75 0 0 0 1.06 0l2.75-2.75.53-.53-1.06-1.06-.53.53-1.47 1.47zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="arrow-circle-down_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowCircleDown;
