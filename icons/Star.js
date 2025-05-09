import * as React from "react";
const SvgStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#star_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m8 .434.658 1.207 1.933 3.543 3.967.743 1.351.253-.944 1-2.773 2.932.52 4.002.176 1.364-1.242-.59L8 13.158l-3.646 1.73-1.242.59.177-1.364.519-4.002L1.035 7.18l-.944-1 1.351-.253 3.967-.743 1.933-3.543zm0 3.132L6.556 6.215l-.17.312-.35.066-2.966.555L5.143 9.34l.244.259-.046.353-.388 2.992 2.725-1.294.322-.153.322.153 2.725 1.294-.388-2.992-.046-.353.244-.259 2.073-2.192-2.965-.555-.35-.066-.17-.312z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="star_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStar;
