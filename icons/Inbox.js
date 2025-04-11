import * as React from "react";
const SvgInbox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#inbox_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.677 7.5 3.927 3h8.146l2.25 4.5H9.25v.75a1.25 1.25 0 0 1-2.5 0V7.5zM1.5 9v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9h-3.854a2.75 2.75 0 0 1-5.292 0zM3 1.5h10l2.894 5.789c.07.139.106.292.106.447V12a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12V7.736a1 1 0 0 1 .106-.447z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="inbox_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInbox;
