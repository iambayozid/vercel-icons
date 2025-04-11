import * as React from "react";
const SvgChevronCircleLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#chevron-circle-left_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0M8.47 4.72 5.89 7.3a.99.99 0 0 0 0 1.4l2.58 2.58.53.53 1.06-1.06-.53-.53L7.31 8l2.22-2.22.53-.53L9 4.19z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="chevron-circle-left_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChevronCircleLeft;
