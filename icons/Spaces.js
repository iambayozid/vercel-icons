import * as React from "react";
const SvgSpaces = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#spaces_svg__a)"
    >
      <path d="M12.742 5.776a4.75 4.75 0 1 0-2.62 3.975M3.262 6.31A4.75 4.75 0 1 0 8 6.46" />
      <path d="M5.855 9.5a4.752 4.752 0 0 1 9.395 1A4.75 4.75 0 0 1 8 14.54" />
    </g>
    <defs>
      <clipPath id="spaces_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpaces;
