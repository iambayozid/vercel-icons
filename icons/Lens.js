import * as React from "react";
const SvgLens = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#lens_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.753 14.26a6.5 6.5 0 0 1-7.517-3.254h7.517zm1.254-.496a6.5 6.5 0 0 0 3.254-7.517h-3.254zm2.757-8.771H6.247V1.739a6.5 6.5 0 0 1 7.517 3.254M4.993 2.236a6.5 6.5 0 0 0-3.254 7.517h3.254zM16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8M6.247 6.247h3.506v3.506H6.247z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="lens_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLens;
