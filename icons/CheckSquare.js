import * as React from "react";
const SvgCheckSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#check-square_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M15 16H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1m-3.22-9.72.53-.53-1.06-1.06-.53.53L6.5 9.44 5.28 8.22l-.53-.53-1.06 1.06.53.53 1.75 1.75a.75.75 0 0 0 1.06 0z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="check-square_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckSquare;
