import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#calendar_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.5.5V2h5V.5H12V2h3.5v11.5A2.5 2.5 0 0 1 13 16H3a2.5 2.5 0 0 1-2.5-2.5V2H4V.5zM2 3.5h12V6H2zm0 4v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="calendar_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendar;
