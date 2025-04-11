import * as React from "react";
const SvgStarFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#star-fill_svg__a)">
      <path
        fill="#fff"
        d="m8 .49 2.573 4.718 5.283.99-3.692 3.905.691 5.33L8 13.128l-4.855 2.305.691-5.33L.144 6.197l5.283-.989z"
      />
    </g>
    <defs>
      <clipPath id="star-fill_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarFill;
