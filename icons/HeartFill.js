import * as React from "react";
const SvgHeartFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#heart-fill_svg__a)">
      <path
        fill="#fff"
        d="M1.394 2.144A4.76 4.76 0 0 1 8 2.024a4.76 4.76 0 0 1 6.606 6.851L8 15.481 1.394 8.875a4.76 4.76 0 0 1 0-6.731"
      />
    </g>
    <defs>
      <clipPath id="heart-fill_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartFill;
