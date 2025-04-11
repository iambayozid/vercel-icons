import * as React from "react";
const SvgLockOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#lock-open_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14 6V4.5a2 2 0 1 0-4 0V6h2v6.5A2.5 2.5 0 0 1 9.5 15h-7A2.5 2.5 0 0 1 0 12.5V6h8.5V4.5a3.5 3.5 0 1 1 7 0V6zm-3.5 1.5h-9v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="lock-open_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLockOpen;
