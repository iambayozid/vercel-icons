import * as React from "react";
const SvgTerminal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#terminal_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m1.53 12.78-.53.53-1.06-1.06.53-.53L4.19 8 .47 4.28l-.53-.53L1 2.69l.53.53 4.074 4.073a1 1 0 0 1 0 1.414zm7.22-.28H8V14h8v-1.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="terminal_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTerminal;
