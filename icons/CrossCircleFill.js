import * as React from "react";
const SvgCrossCircleFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#cross-circle-fill_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8m-5.5 3.56-.53-.53L8 9.06l-1.97 1.97-.53.53-1.06-1.06.53-.53L6.94 8 4.97 6.03l-.53-.53L5.5 4.44l.53.53L8 6.94l1.97-1.97.53-.53 1.06 1.06-.53.53L9.06 8l1.97 1.97.53.53z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="cross-circle-fill_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrossCircleFill;
