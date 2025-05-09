import * as React from "react";
const SvgNotification = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#notification_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 2.959A3 3 0 0 1 10.041 2.5H4.75A2.25 2.25 0 0 0 2.5 4.75v6.5a2.25 2.25 0 0 0 2.25 2.25h6.5a2.25 2.25 0 0 0 2.25-2.25zm1.5-.723v6.014A3.75 3.75 0 0 1 11.25 15h-6.5A3.75 3.75 0 0 1 1 11.25v-6.5A3.75 3.75 0 0 1 4.75 1h6.014A3 3 0 1 1 15 5.236"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="notification_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotification;
