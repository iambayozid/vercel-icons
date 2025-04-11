import * as React from "react";
const SvgHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.065 3.205a3.26 3.26 0 1 0-4.61 4.61L8 13.36l5.545-5.545a3.26 3.26 0 0 0-4.61-4.61l-.405.405-.53.53-.53-.53zM8 2.023a4.76 4.76 0 0 0-6.606 6.852l6.076 6.076.53.53.53-.53 6.076-6.076A4.76 4.76 0 0 0 8 2.023"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart;
