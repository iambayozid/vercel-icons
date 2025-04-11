import * as React from "react";
const SvgPaperAirplane = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#paper-airplane_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m14.748.294-14 5L.73 6.7l6.085 2.34a.25.25 0 0 1 .143.144L9.3 15.27l1.407-.017 5-14-.958-.958zM7.314 7.625 3.157 6.026l8.954-3.198zm1.06 1.06 1.6 4.158 3.198-8.954-4.797 4.797z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="paper-airplane_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperAirplane;
