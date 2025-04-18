import * as React from "react";
const SvgCrosshair = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#crosshair_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.25 11.75v2.707A6.5 6.5 0 0 1 1.543 8.75H5v-1.5H1.543A6.5 6.5 0 0 1 7.25 1.543V5h1.5V1.543a6.5 6.5 0 0 1 5.707 5.707H11v1.5h3.457a6.5 6.5 0 0 1-5.707 5.707V11h-1.5zm8.715-3a8 8 0 0 1-7.215 7.215V16h-1.5v-.035A8 8 0 0 1 .035 8.75H0v-1.5h.035A8 8 0 0 1 7.25.035V0h1.5v.035a8 8 0 0 1 7.215 7.215H16v1.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="crosshair_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrosshair;
