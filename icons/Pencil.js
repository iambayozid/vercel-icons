import * as React from "react";
const SvgPencil = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#pencil_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m12.28.72-.53-.53-.53.53L1.098 10.84A3.75 3.75 0 0 0 0 13.493V16h2.507a3.75 3.75 0 0 0 2.652-1.098L15.28 4.78l.53-.53-.53-.53zM9.81 4.25l1.94-1.94 1.94 1.94-1.94 1.94zM8.75 5.31l-6.591 6.592a2.25 2.25 0 0 0-.659 1.59V14.5h1.007a2.25 2.25 0 0 0 1.591-.659L10.69 7.25z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="pencil_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPencil;
