import * as React from "react";
const SvgAnchor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#anchor_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5 3a3 3 0 1 1 3.75 2.905v8.554c2.997-.33 5.348-2.613 5.704-5.459H13V7.5h3v.75C16 12.555 12.393 16 8 16s-8-3.445-8-7.75V7.5h3V9H1.547c.355 2.846 2.706 5.13 5.703 5.459V5.905A3 3 0 0 1 5 3"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="anchor_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAnchor;
