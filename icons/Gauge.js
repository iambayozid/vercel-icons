import * as React from "react";
const SvgGauge = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#gauge_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.991 1.576a6.5 6.5 0 0 0-5.587 11.02l.53.53-1.06 1.061-.53-.53A8 8 0 0 1 9.966.244zm4.84 3.547a6.5 6.5 0 0 1-1.235 7.473l-.53.53 1.06 1.061.53-.53a8 8 0 0 0 1.15-9.865l-.976 1.33zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 1.5a2.5 2.5 0 0 0 1.98-4.025l3.467-4.334a8 8 0 0 0-1.188-.915l-3.51 4.388A2.5 2.5 0 1 0 8 10.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="gauge_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGauge;
