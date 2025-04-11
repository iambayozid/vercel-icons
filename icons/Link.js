import * as React from "react";
const SvgLink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#link_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.47 1.47a4.285 4.285 0 1 1 6.06 6.06l-2.5 2.5-1.06-1.06 2.5-2.5a2.786 2.786 0 1 0-3.94-3.94l-2.5 2.5-1.06-1.06zm3.06 4.06-6 6-1.06-1.06 6-6zm-10.06 9a4.284 4.284 0 0 0 6.06 0l2.5-2.5-1.06-1.06-2.5 2.5a2.786 2.786 0 1 1-3.94-3.94l2.5-2.5-1.06-1.06-2.5 2.5a4.285 4.285 0 0 0 0 6.06"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="link_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLink;
