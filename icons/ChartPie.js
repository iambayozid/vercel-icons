import * as React from "react";
const SvgChartPie = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#chart-pie_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.457 8.75A6.5 6.5 0 1 1 7.25 1.543V7.75a1 1 0 0 0 1 1zm0-1.5H8.75V1.543a6.5 6.5 0 0 1 5.707 5.707M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="chart-pie_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartPie;
