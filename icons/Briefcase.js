import * as React from "react";
const SvgBriefcase = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#briefcase_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6 2.5h4a.5.5 0 0 1 .5.5v1h-5V3a.5.5 0 0 1 .5-.5M4 4V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4v9.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5V4zm8 1.5H1.5v3.75h5.75V8.5h1.5v.75h5.75V5.5zm-3.25 5.25h5.75v2.75a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-2.75h5.75v.75h1.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="briefcase_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBriefcase;
