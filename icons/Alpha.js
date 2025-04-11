import * as React from "react";
const SvgAlpha = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#alpha_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15.3A7.3 7.3 0 1 0 8 .7a7.3 7.3 0 0 0 0 14.6"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5 1h2v2H5zm0 4V3H3v2H1v2h2v2H1v2h2v2h2v2h2v-2h2v2h2v-2h2v-2h2V9h-2V7h2V5h-2V3h-2V1H9v2H7v2zm0 2H3V5h2zm2 0V5h2v2zm0 2V7H5v2H3v2h2v2h2v-2h2v2h2v-2h2V9h-2V7h2V5h-2V3H9v2h2v2H9v2zm2 0h2v2H9zM7 9v2H5V9z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </g>
    <defs>
      <clipPath id="alpha_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlpha;
