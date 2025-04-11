import * as React from "react";
const SvgVideo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#video_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm6.745 5.764L9.216 8 6.745 9.236zm4.36.789a.5.5 0 0 1 0 .894l-4.881 2.441a.5.5 0 0 1-.724-.447V5.559a.5.5 0 0 1 .724-.447l4.882 2.44z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="video_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideo;
