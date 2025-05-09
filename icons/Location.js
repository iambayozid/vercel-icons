import * as React from "react";
const SvgLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#location_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11.525 10.263 8 13.858l-3.525-3.595c-1.967-2.004-1.967-5.267 0-7.272a4.91 4.91 0 0 1 7.05 0c1.967 2.005 1.967 5.268 0 7.272m1.071 1.05L9.051 14.93 8 16l-1.05-1.071-3.546-3.615C.865 8.726.865 4.529 3.404 1.94a6.41 6.41 0 0 1 9.192 0c2.539 2.588 2.539 6.785 0 9.373M9 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="location_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocation;
