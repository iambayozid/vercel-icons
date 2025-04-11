import * as React from "react";
const SvgTag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#tag_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.5 1.5h4.843a2.5 2.5 0 0 1 1.768.732L13.879 8 8 13.879 2.232 8.11A2.5 2.5 0 0 1 1.5 6.343zM16 8l-1.06-1.06-5.768-5.768A4 4 0 0 0 6.343 0H0v6.343a4 4 0 0 0 1.172 2.829l5.767 5.767L8 16l1.06-1.06 5.88-5.88zM4.5 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tag_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTag;
