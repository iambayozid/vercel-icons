import * as React from "react";
const SvgQuestionFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#question-fill_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8m-7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.096 5.822A1 1 0 1 1 8.143 7.24c-.44.063-.893.435-.893 1.01v1h1.5v-.615a2.5 2.5 0 1 0-3.009-3.457l-.322.678 1.355.643z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="question-fill_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionFill;
