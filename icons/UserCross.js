import * as React from "react";
const SvgUserCross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#user-cross_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.75 0A3.25 3.25 0 0 0 2.5 3.25v.5A3.25 3.25 0 0 0 5.75 7h.5A3.25 3.25 0 0 0 9.5 3.75v-.5A3.25 3.25 0 0 0 6.25 0zM4 3.25c0-.966.784-1.75 1.75-1.75h.5C7.216 1.5 8 2.284 8 3.25v.5A1.75 1.75 0 0 1 6.25 5.5h-.5A1.75 1.75 0 0 1 4 3.75zm11.28 3.03.53-.53-1.06-1.06-.53.53-.845.844-.845-.844-.53-.53-1.06 1.06.53.53.844.845-.844.845-.53.53L12 9.56l.53-.53.845-.844.845.844.53.53 1.06-1.06-.53-.53-.844-.845zM1.5 13.17v1.33h9v-1.33a4.84 4.84 0 0 0-4.33-2.67h-.34a4.84 4.84 0 0 0-4.33 2.67m-1.431-.484A6.34 6.34 0 0 1 5.829 9h.342a6.34 6.34 0 0 1 5.76 3.686l.069.15V16H0v-3.165z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="user-cross_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCross;
