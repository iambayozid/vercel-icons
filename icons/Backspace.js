import * as React from "react";
const SvgBackspace = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#backspace_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 .75V0h1.5v16H0zm8.47 2.47L9 2.69l1.06 1.06-.53.53-2.97 2.97H16v1.5H6.56l2.97 2.97.53.53L9 13.31l-.53-.53-4.25-4.25a.75.75 0 0 1 0-1.06z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="backspace_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackspace;
