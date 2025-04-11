import * as React from "react";
const SvgCpu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#cpu_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.5 2V0H7v2h2V0h1.5v2H13a1 1 0 0 1 1 1v2.5h2V7h-2v2h2v1.5h-2V13a1 1 0 0 1-1 1h-2.5v2H9v-2H7v2H5.5v-2H3a1 1 0 0 1-1-1v-2.5H0V9h2V7H0V5.5h2V3a1 1 0 0 1 1-1zm7.25 8.5V3.25h-9.5v9.5h9.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="cpu_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCpu;
