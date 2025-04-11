import * as React from "react";
const SvgMagnifyingGlass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#magnifying-glass_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 6.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-6.5a6.5 6.5 0 1 0 4.035 11.596l3.435 3.434.53.53 1.06-1.06-.53-.53-3.434-3.435A6.5 6.5 0 0 0 6.5 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="magnifying-glass_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagnifyingGlass;
