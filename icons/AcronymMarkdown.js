import * as React from "react";
const SvgAcronymMarkdown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 16"
    {...props}
  >
    <g clipPath="url(#acronym-markdown_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.5 2.25h-17c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h17c.69 0 1.25-.56 1.25-1.25v-9c0-.69-.56-1.25-1.25-1.25M2.5 1A2.5 2.5 0 0 0 0 3.5v9A2.5 2.5 0 0 0 2.5 15h17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 1zM3 4.5h1.69l.297.324L7 7.02l2.013-2.196.297-.324H11v7H9V7.798L7.737 9.176 7 9.98l-.737-.804L5 7.798V11.5H3zM15 8V4.5h2V8h2.5L17 10.5l-1 1-1-1L12.5 8z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="acronym-markdown_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAcronymMarkdown;
