import * as React from "react";
const SvgCheckCircleFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#check-circle-fill_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8m-4.47-1.47.53-.53L11 4.94l-.53.53L6.5 9.44l-.97-.97L5 7.94 3.94 9l.53.53 1.5 1.5a.75.75 0 0 0 1.06 0z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="check-circle-fill_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckCircleFill;
