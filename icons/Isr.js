import * as React from "react";
const SvgIsr = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#isr_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3 0h7.596a1 1 0 0 1 .707.293l4.404 4.403a1 1 0 0 1 .293.708V13.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 13.5V9.31l-1.22 1.22-.53.53L.19 10l.53-.53 2.323-2.324a1 1 0 0 1 1.414 0L6.78 9.47l.53.53-1.06 1.06-.53-.53L4.5 9.31v4.19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7h-5v-5h-5V4H3zm8 2.11V5h2.89z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="isr_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIsr;
