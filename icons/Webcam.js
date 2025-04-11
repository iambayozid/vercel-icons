import * as React from "react";
const SvgWebcam = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#webcam_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M2.25 2A2.25 2.25 0 0 0 0 4.25v7.5A2.25 2.25 0 0 0 2.25 14h9.25v-2.625l3 1.75L16 14V2l-1.5.875-3 1.75V2zm9.25 4.362v3.276l3 1.75V4.612zM10 5.5v-2H2.25a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75H10z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="webcam_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWebcam;
