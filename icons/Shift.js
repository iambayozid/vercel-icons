import * as React from "react";
const SvgShift = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#shift_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m8 .19.53.53 6.074 6.073c.63.63.183 1.707-.708 1.707H11V16H5V8.5H2.104c-.891 0-1.338-1.077-.708-1.707L7.47.72zM3.31 7H6.5v7.5h3V7h3.19L8 2.31z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="shift_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShift;
