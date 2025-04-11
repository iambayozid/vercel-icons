import * as React from "react";
const SvgBookmark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#bookmark_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11 1.5H5a1 1 0 0 0-1 1v10.973l3.162-1.725a1.75 1.75 0 0 1 1.676 0L12 13.473V2.5a1 1 0 0 0-1-1m2.5 12.791V2.5A2.5 2.5 0 0 0 11 0H5a2.5 2.5 0 0 0-2.5 2.5V16l1.5-.818 3.88-2.117a.25.25 0 0 1 .24 0L12 15.182l1.5.818z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bookmark_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBookmark;
